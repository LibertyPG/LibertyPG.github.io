# Liberty PG - Backend Integration Contracts

## API Endpoints

### 1. Enquiry Management

#### POST /api/enquiry
**Purpose:** Submit new enquiry form from website

**Request Body:**
```json
{
  "name": "string (required)",
  "contact": "string (required)",
  "email": "string (optional)",
  "roomType": "string (required) - single/twin/triple/four/five",
  "message": "string (optional)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully",
  "enquiryId": "uuid"
}
```

#### GET /api/enquiries
**Purpose:** Get all enquiries (admin endpoint)

**Response:**
```json
{
  "enquiries": [
    {
      "id": "uuid",
      "name": "string",
      "contact": "string",
      "email": "string",
      "roomType": "string",
      "message": "string",
      "status": "pending/contacted/closed",
      "createdAt": "datetime"
    }
  ]
}
```

### 2. Statistics

#### GET /api/stats
**Purpose:** Get current statistics for the PG

**Response:**
```json
{
  "totalStudents": 50,
  "totalRooms": 17,
  "totalBeds": 50,
  "availableSeats": 5
}
```

### 3. Reviews

#### GET /api/reviews
**Purpose:** Get all reviews (mocked from Google reviews data)

**Response:**
```json
{
  "reviews": [
    {
      "name": "string",
      "rating": 5,
      "review": "string",
      "date": "string"
    }
  ],
  "averageRating": 5.0,
  "totalReviews": 16
}
```

## MongoDB Collections

### 1. enquiries
```
{
  _id: ObjectId,
  id: String (UUID),
  name: String,
  contact: String,
  email: String?,
  roomType: String,
  message: String?,
  status: String (default: "pending"),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

### 2. statistics
```
{
  _id: ObjectId,
  totalStudents: Number,
  totalRooms: Number,
  totalBeds: Number,
  availableSeats: Number,
  updatedAt: DateTime
}
```

## Frontend Integration Changes

### Files to Update:

1. **EnquiryForm.jsx**
   - Replace mock submission with actual API call to POST /api/enquiry
   - Handle success/error responses properly
   - Show appropriate toast messages

2. **Statistics.jsx**
   - Fetch real data from GET /api/stats on component mount
   - Display loading state while fetching

3. **Reviews.jsx**
   - Keep mocked data (already has real Google review content)
   - Or optionally fetch from GET /api/reviews

## Implementation Steps

1. ✅ Create MongoDB models in backend
2. ✅ Implement API endpoints with proper validation
3. ✅ Add error handling and logging
4. ✅ Update frontend components to use real APIs
5. ✅ Test all flows end-to-end
