from pydantic import BaseModel, Field
from datetime import datetime

class Statistics(BaseModel):
    totalStudents: int = 50
    totalRooms: int = 17
    totalBeds: int = 50
    availableSeats: int = 5
    updatedAt: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        json_schema_extra = {
            "example": {
                "totalStudents": 50,
                "totalRooms": 17,
                "totalBeds": 50,
                "availableSeats": 5
            }
        }