import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Reviews = () => {
  const reviews = [
    {
      name: 'Hemanshu Patel',
      rating: 5,
      review: "I'm currently staying in this PG and my experience has been really good so far. The people who manage the PG are kind, helpful, and always supportive. The environment is clean, peaceful, and comfortable, which makes it feel like home.",
      date: '2 weeks ago'
    },
    {
      name: 'Krishna Jepar',
      rating: 5,
      review: 'I had a comfortable and satisfactory stay at this PG. The premises are well maintained, rooms are clean, and basic facilities are properly managed. The management is professional, cooperative, and responsive. Overall, it is a reliable and well-organized PG.',
      date: '2 weeks ago'
    },
    {
      name: 'Keshav Bohra',
      rating: 5,
      review: 'Excellent PG with a very comfortable and homely environment. Rooms are clean, spacious, and well-maintained. The food is hygienic and tastes great, just like home. The owner and staff are extremely supportive and friendly. Wi-Fi, security, and all other amenities are top-notch.',
      date: '2 weeks ago'
    }
  ];

  return (
    <section id="reviews" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://customer-assets.emergentagent.com/job_liberty-stays/artifacts/tcxqm9as_LOGO.png"
              alt="Liberty PG"
              className="h-16"
            />
          </div>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="h-8"
            />
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="text-yellow-400 fill-yellow-400" size={24} />
              ))}
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900">5.0 Based on 16 reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{review.review}</p>

                <div className="mt-4 flex items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                    alt="Google"
                    className="h-4 mr-2"
                  />
                  <span className="text-xs text-gray-500">Posted on Google</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/6cvzxPGj9AUweCY8A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;