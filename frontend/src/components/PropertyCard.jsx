import React from 'react';
import { MapPin, Phone, Mail, Bed, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const PropertyCard = ({ onEnquireClick }) => {
  return (
    <section id="property" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Checkout our amazing Property!
          </h2>
          <p className="text-xl text-gray-600">
            Liberty PG is designed to offer you an immersive, tranquil and fun living experience.
          </p>
        </div>

        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-500">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&q=80"
              alt="Liberty PG"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
              Limited Seats Available
            </div>
          </div>

          <CardContent className="p-8">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">LIBERTY PG</h3>
              <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold">
                MITHAKHALI, NAVRANGPURA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Users className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Boys Accommodation</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Bed className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Single, Twin, Triple, Four & Five Sharing Rooms
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <a
                    href="https://maps.app.goo.gl/6cvzxPGj9AUweCY8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Mithakhali Six Roads, Navrangpura, Ahmedabad - 380006
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div className="space-y-1">
                  <a href="tel:+917862931746" className="block text-blue-600 hover:underline">
                    +91 7862931746
                  </a>
                  <a href="tel:+919636484074" className="block text-blue-600 hover:underline">
                    +91 9636484074
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 md:col-span-2">
                <div className="flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <a href="mailto:info.libertypg@gmail.com" className="text-blue-600 hover:underline">
                    info.libertypg@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <Button
              onClick={onEnquireClick}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg rounded-md transition-all duration-300 hover:shadow-xl"
            >
              ENQUIRE NOW - GET PRICING DETAILS
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PropertyCard;