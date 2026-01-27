#!/usr/bin/env python3
"""
Liberty PG Backend API Test Suite
Tests all API endpoints with various scenarios
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from frontend .env file
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except FileNotFoundError:
        pass
    return "https://liberty-stays.preview.emergentagent.com"

BASE_URL = get_backend_url()
API_BASE = f"{BASE_URL}/api"

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BLUE = '\033[94m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_test_header(test_name):
    print(f"\n{Colors.BLUE}{Colors.BOLD}{'='*60}{Colors.ENDC}")
    print(f"{Colors.BLUE}{Colors.BOLD}Testing: {test_name}{Colors.ENDC}")
    print(f"{Colors.BLUE}{Colors.BOLD}{'='*60}{Colors.ENDC}")

def print_success(message):
    print(f"{Colors.GREEN}✓ {message}{Colors.ENDC}")

def print_error(message):
    print(f"{Colors.RED}✗ {message}{Colors.ENDC}")

def print_warning(message):
    print(f"{Colors.YELLOW}⚠ {message}{Colors.ENDC}")

def print_info(message):
    print(f"{Colors.BLUE}ℹ {message}{Colors.ENDC}")

def test_root_endpoint():
    """Test GET /api/ - Root endpoint"""
    print_test_header("Root Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        
        print_info(f"URL: {API_BASE}/")
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print_info(f"Response: {json.dumps(data, indent=2)}")
            
            # Check required fields
            if "message" in data and "version" in data:
                if data.get("version") == "1.0.0":
                    print_success("Root endpoint working correctly with version 1.0.0")
                    return True
                else:
                    print_error(f"Expected version 1.0.0, got {data.get('version')}")
            else:
                print_error("Missing required fields in response")
        else:
            print_error(f"Expected status 200, got {response.status_code}")
            print_error(f"Response: {response.text}")
            
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {str(e)}")
    
    return False

def test_stats_endpoint():
    """Test GET /api/stats - Statistics endpoint"""
    print_test_header("Statistics Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/stats", timeout=10)
        
        print_info(f"URL: {API_BASE}/stats")
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print_info(f"Response: {json.dumps(data, indent=2)}")
            
            # Check required fields
            required_fields = ["totalStudents", "totalRooms", "totalBeds", "availableSeats"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                print_success("Statistics endpoint working correctly with all required fields")
                return True
            else:
                print_error(f"Missing required fields: {missing_fields}")
        else:
            print_error(f"Expected status 200, got {response.status_code}")
            print_error(f"Response: {response.text}")
            
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {str(e)}")
    
    return False

def test_enquiry_submission():
    """Test POST /api/enquiry - Enquiry submission with various scenarios"""
    print_test_header("Enquiry Submission")
    
    # Test 1: Valid enquiry submission
    print_info("Test 1: Valid enquiry with all fields")
    valid_enquiry = {
        "name": "Rajesh Kumar",
        "contact": "+91 9876543210",
        "email": "rajesh.kumar@example.com",
        "roomType": "twin",
        "message": "Looking for accommodation from next month. Prefer ground floor room."
    }
    
    success_count = 0
    
    try:
        response = requests.post(f"{API_BASE}/enquiry", json=valid_enquiry, timeout=10)
        
        print_info(f"URL: {API_BASE}/enquiry")
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Request: {json.dumps(valid_enquiry, indent=2)}")
        
        if response.status_code == 201:
            data = response.json()
            print_info(f"Response: {json.dumps(data, indent=2)}")
            
            if data.get("success") and "enquiryId" in data:
                print_success("Valid enquiry submission working correctly")
                success_count += 1
            else:
                print_error("Response missing success=true or enquiryId")
        else:
            print_error(f"Expected status 201, got {response.status_code}")
            print_error(f"Response: {response.text}")
            
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {str(e)}")
    
    # Test 2: Test different room types
    print_info("\nTest 2: Different room types")
    room_types = ["single", "twin", "triple", "four", "five"]
    
    for room_type in room_types:
        enquiry = {
            "name": f"Student {room_type.title()}",
            "contact": "+91 9876543210",
            "email": f"student.{room_type}@example.com",
            "roomType": room_type,
            "message": f"Interested in {room_type} sharing room"
        }
        
        try:
            response = requests.post(f"{API_BASE}/enquiry", json=enquiry, timeout=10)
            
            if response.status_code == 201:
                data = response.json()
                if data.get("success"):
                    print_success(f"Room type '{room_type}' accepted")
                else:
                    print_error(f"Room type '{room_type}' - success=false")
            else:
                print_error(f"Room type '{room_type}' - Status {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            print_error(f"Room type '{room_type}' - Request failed: {str(e)}")
    
    # Test 3: Missing required fields
    print_info("\nTest 3: Missing required fields")
    invalid_enquiries = [
        {"contact": "+91 9876543210", "roomType": "twin"},  # Missing name
        {"name": "Test User", "roomType": "twin"},  # Missing contact
        {"name": "Test User", "contact": "+91 9876543210"},  # Missing roomType
    ]
    
    for i, invalid_enquiry in enumerate(invalid_enquiries, 1):
        try:
            response = requests.post(f"{API_BASE}/enquiry", json=invalid_enquiry, timeout=10)
            
            if response.status_code in [400, 422]:  # Should fail validation
                print_success(f"Invalid enquiry {i} correctly rejected (status {response.status_code})")
            else:
                print_warning(f"Invalid enquiry {i} - Expected 400/422, got {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            print_error(f"Invalid enquiry {i} - Request failed: {str(e)}")
    
    return success_count > 0

def test_enquiries_fetch():
    """Test GET /api/enquiries - Fetch all enquiries"""
    print_test_header("Fetch Enquiries")
    
    try:
        response = requests.get(f"{API_BASE}/enquiries", timeout=10)
        
        print_info(f"URL: {API_BASE}/enquiries")
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print_info(f"Number of enquiries: {len(data)}")
            
            if isinstance(data, list):
                if len(data) > 0:
                    print_info(f"Sample enquiry: {json.dumps(data[0], indent=2, default=str)}")
                    
                    # Check if enquiries have required fields
                    sample = data[0]
                    required_fields = ["id", "name", "contact", "roomType", "status"]
                    missing_fields = [field for field in required_fields if field not in sample]
                    
                    if not missing_fields:
                        print_success("Enquiries fetch working correctly")
                        return True
                    else:
                        print_error(f"Enquiry missing required fields: {missing_fields}")
                else:
                    print_success("Enquiries fetch working (empty list)")
                    return True
            else:
                print_error("Response is not a list")
        else:
            print_error(f"Expected status 200, got {response.status_code}")
            print_error(f"Response: {response.text}")
            
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {str(e)}")
    
    return False

def test_reviews_endpoint():
    """Test GET /api/reviews - Reviews endpoint"""
    print_test_header("Reviews Endpoint")
    
    try:
        response = requests.get(f"{API_BASE}/reviews", timeout=10)
        
        print_info(f"URL: {API_BASE}/reviews")
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print_info(f"Response: {json.dumps(data, indent=2)}")
            
            # Check required fields
            required_fields = ["reviews", "averageRating", "totalReviews"]
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                if isinstance(data["reviews"], list) and len(data["reviews"]) > 0:
                    # Check review structure
                    sample_review = data["reviews"][0]
                    review_fields = ["name", "rating", "review", "date"]
                    missing_review_fields = [field for field in review_fields if field not in sample_review]
                    
                    if not missing_review_fields:
                        print_success("Reviews endpoint working correctly")
                        return True
                    else:
                        print_error(f"Review missing required fields: {missing_review_fields}")
                else:
                    print_error("Reviews list is empty or not a list")
            else:
                print_error(f"Missing required fields: {missing_fields}")
        else:
            print_error(f"Expected status 200, got {response.status_code}")
            print_error(f"Response: {response.text}")
            
    except requests.exceptions.RequestException as e:
        print_error(f"Request failed: {str(e)}")
    
    return False

def run_all_tests():
    """Run all backend API tests"""
    print(f"{Colors.BOLD}Liberty PG Backend API Test Suite{Colors.ENDC}")
    print(f"Testing against: {BASE_URL}")
    print(f"API Base URL: {API_BASE}")
    print(f"Test started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    test_results = {}
    
    # Run all tests
    test_results["root_endpoint"] = test_root_endpoint()
    test_results["stats_endpoint"] = test_stats_endpoint()
    test_results["enquiry_submission"] = test_enquiry_submission()
    test_results["enquiries_fetch"] = test_enquiries_fetch()
    test_results["reviews_endpoint"] = test_reviews_endpoint()
    
    # Summary
    print_test_header("Test Summary")
    
    passed = sum(test_results.values())
    total = len(test_results)
    
    for test_name, result in test_results.items():
        status = "PASS" if result else "FAIL"
        color = Colors.GREEN if result else Colors.RED
        print(f"{color}{status:4} - {test_name.replace('_', ' ').title()}{Colors.ENDC}")
    
    print(f"\n{Colors.BOLD}Overall Result: {passed}/{total} tests passed{Colors.ENDC}")
    
    if passed == total:
        print(f"{Colors.GREEN}{Colors.BOLD}🎉 All tests passed!{Colors.ENDC}")
        return True
    else:
        print(f"{Colors.RED}{Colors.BOLD}❌ Some tests failed{Colors.ENDC}")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)