from pydantic import BaseModel
from typing import List

class Review(BaseModel):
    name: str
    rating: int
    review: str
    date: str

    class Config:
        json_schema_extra = {
            "example": {
                "name": "Hemanshu Patel",
                "rating": 5,
                "review": "Great PG with excellent facilities",
                "date": "2 weeks ago"
            }
        }

class ReviewsResponse(BaseModel):
    reviews: List[Review]
    averageRating: float
    totalReviews: int