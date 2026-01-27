from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime
import uuid

class EnquiryCreate(BaseModel):
    name: str
    contact: str
    email: Optional[str] = None
    roomType: str
    message: Optional[str] = None

class Enquiry(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    contact: str
    email: Optional[str] = None
    roomType: str
    message: Optional[str] = None
    status: str = "pending"
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "name": "John Doe",
                "contact": "+91 9876543210",
                "email": "john@example.com",
                "roomType": "twin",
                "message": "Looking for accommodation from next month",
                "status": "pending"
            }
        }