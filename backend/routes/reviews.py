from fastapi import APIRouter, HTTPException, status
import logging
from models.review import Review, ReviewsResponse
from typing import List

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["reviews"])

# Mock reviews data from Google Reviews
MOCK_REVIEWS = [
    {
        "name": "Hemanshu Patel",
        "rating": 5,
        "review": "I'm currently staying in this PG and my experience has been really good so far. The people who manage the PG are kind, helpful, and always supportive. The environment is clean, peaceful, and comfortable, which makes it feel like home.",
        "date": "2 weeks ago"
    },
    {
        "name": "Krishna Jepar",
        "rating": 5,
        "review": "I had a comfortable and satisfactory stay at this PG. The premises are well maintained, rooms are clean, and basic facilities are properly managed. The management is professional, cooperative, and responsive. Overall, it is a reliable and well-organized PG.",
        "date": "2 weeks ago"
    },
    {
        "name": "Keshav Bohra",
        "rating": 5,
        "review": "Excellent PG with a very comfortable and homely environment. Rooms are clean, spacious, and well-maintained. The food is hygienic and tastes great, just like home. The owner and staff are extremely supportive and friendly. Wi-Fi, security, and all other amenities are top-notch.",
        "date": "2 weeks ago"
    }
]

@router.get("/reviews", response_model=ReviewsResponse)
async def get_reviews():
    """
    Get all reviews (currently using mock data from Google Reviews)
    """
    try:
        reviews = [Review(**review) for review in MOCK_REVIEWS]
        
        return ReviewsResponse(
            reviews=reviews,
            averageRating=5.0,
            totalReviews=16
        )
    except Exception as e:
        logger.error(f"Error fetching reviews: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch reviews"
        )