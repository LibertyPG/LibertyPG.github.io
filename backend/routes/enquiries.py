from fastapi import APIRouter, HTTPException, status
from typing import List
import logging
from models.enquiry import Enquiry, EnquiryCreate
from database import db
import requests

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["enquiries"])

def send_whatsapp_notification(enquiry: Enquiry):
    """
    Send WhatsApp notification for new enquiry
    """
    try:
        phone_number = "917862931746"  # Your WhatsApp number
        
        # Format message
        message = f"""🏠 *New Enquiry - Liberty PG*

👤 *Name:* {enquiry.name}
📱 *Contact:* {enquiry.contact}
📧 *Email:* {enquiry.email or 'Not provided'}
🛏️ *Room Type:* {enquiry.roomType}
💬 *Message:* {enquiry.message or 'No message'}

📅 *Date:* {enquiry.createdAt.strftime('%d %B %Y, %I:%M %p')}
🆔 *Enquiry ID:* {enquiry.id}

Please contact the customer at the earliest!"""

        logger.info(f"WhatsApp notification prepared for enquiry {enquiry.id}")
        logger.info(f"Message would be sent to: {phone_number}")
        logger.info(f"Message content: {message}")
        
        # Note: To enable WhatsApp notifications, you need to:
        # 1. Set up WhatsApp Business API or use services like Twilio
        # 2. Add API credentials to environment variables
        # 3. Uncomment the API call below
        
        # Example with Twilio (when configured):
        # from twilio.rest import Client
        # client = Client(account_sid, auth_token)
        # message = client.messages.create(
        #     from_='whatsapp:+14155238886',
        #     body=message,
        #     to=f'whatsapp:+{phone_number}'
        # )
        
    except Exception as e:
        logger.error(f"Error sending WhatsApp notification: {str(e)}")
        # Don't fail the enquiry submission if WhatsApp fails

@router.post("/enquiry", status_code=status.HTTP_201_CREATED)
async def create_enquiry(enquiry_data: EnquiryCreate):
    """
    Submit a new enquiry form
    """
    try:
        # Create enquiry object
        enquiry = Enquiry(**enquiry_data.dict())
        
        # Insert into database
        result = await db.enquiries.insert_one(enquiry.dict())
        
        logger.info(f"New enquiry created: {enquiry.id} from {enquiry.name}")
        
        # Send WhatsApp notification
        send_whatsapp_notification(enquiry)
        
        return {
            "success": True,
            "message": "Enquiry submitted successfully. We'll contact you soon!",
            "enquiryId": enquiry.id
        }
    except Exception as e:
        logger.error(f"Error creating enquiry: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to submit enquiry. Please try again."
        )

@router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries(status_filter: str = None, limit: int = 100):
    """
    Get all enquiries (admin endpoint)
    Optional status filter: pending, contacted, closed
    """
    try:
        query = {}
        if status_filter:
            query["status"] = status_filter
        
        enquiries = await db.enquiries.find(query).sort("createdAt", -1).limit(limit).to_list(limit)
        
        return [Enquiry(**enquiry) for enquiry in enquiries]
    except Exception as e:
        logger.error(f"Error fetching enquiries: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch enquiries"
        )

@router.get("/enquiry/{enquiry_id}", response_model=Enquiry)
async def get_enquiry(enquiry_id: str):
    """
    Get a specific enquiry by ID
    """
    try:
        enquiry = await db.enquiries.find_one({"id": enquiry_id})
        
        if not enquiry:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Enquiry not found"
            )
        
        return Enquiry(**enquiry)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching enquiry: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch enquiry"
        )

@router.patch("/enquiry/{enquiry_id}/status")
async def update_enquiry_status(enquiry_id: str, new_status: str):
    """
    Update enquiry status (pending/contacted/closed)
    """
    try:
        valid_statuses = ["pending", "contacted", "closed"]
        if new_status not in valid_statuses:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
            )
        
        result = await db.enquiries.update_one(
            {"id": enquiry_id},
            {"$set": {"status": new_status}}
        )
        
        if result.matched_count == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Enquiry not found"
            )
        
        return {
            "success": True,
            "message": "Status updated successfully"
        }
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating enquiry status: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update status"
        )