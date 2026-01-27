from fastapi import APIRouter, HTTPException, status
import logging
from models.statistics import Statistics
from motor.motor_asyncio import AsyncIOMotorClient
import os

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["statistics"])

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'liberty_pg')]

@router.get("/stats", response_model=Statistics)
async def get_statistics():
    """
    Get current statistics for Liberty PG
    """
    try:
        # Try to fetch from database
        stats = await db.statistics.find_one()
        
        if stats:
            return Statistics(**stats)
        else:
            # Return default statistics if not found in DB
            default_stats = Statistics(
                totalStudents=50,
                totalRooms=17,
                totalBeds=50,
                availableSeats=5
            )
            
            # Save default stats to DB
            await db.statistics.insert_one(default_stats.dict())
            
            return default_stats
    except Exception as e:
        logger.error(f"Error fetching statistics: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to fetch statistics"
        )

@router.put("/stats", response_model=Statistics)
async def update_statistics(stats: Statistics):
    """
    Update statistics (admin endpoint)
    """
    try:
        # Update or insert statistics
        await db.statistics.delete_many({})
        await db.statistics.insert_one(stats.dict())
        
        logger.info("Statistics updated successfully")
        
        return stats
    except Exception as e:
        logger.error(f"Error updating statistics: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update statistics"
        )