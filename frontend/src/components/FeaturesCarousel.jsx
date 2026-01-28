import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wifi, Utensils, Bed, Shield, Users, Dumbbell, BookOpen, Car, Shirt, Building2 } from 'lucide-react';
import { Button } from './ui/button';

const FeaturesCarousel = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 1,
      title: 'Hygienic Vegetarian Food',
      description: 'Fresh, nutritious, and delicious vegetarian home-style meals prepared with utmost hygiene standards.',
      icon: Utensils,
      images: [
        'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80',
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80',
        'https://images.unsplash.com/photo-1626074353765-517a1cf4f498?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'Fully Furnished Rooms',
      description: 'Modern, aesthetically designed rooms with comfortable beds, study tables, wardrobes, and AC.',
      icon: Bed,
      images: [
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'High-Speed WiFi',
      description: 'Seamless internet connectivity throughout the property for uninterrupted work and entertainment.',
      icon: Wifi,
      images: [
        'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=800&q=80',
        'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: '24/7 Security',
      description: 'The highest standard of safety and security measures for a worry-free living experience.',
      icon: Shield,
      images: [
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&q=80',
        'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'Interactive Spaces',
      description: 'Immersive and fun-filled common areas for recreation, relaxation, and social interaction.',
      icon: Users,
      images: [
        'https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80',
        'https://images.unsplash.com/photo-1522844990619-4951c40f7eda?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'Laundry Service',
      description: 'Convenient laundry facilities to keep your clothes fresh and clean without hassle.',
      icon: Shirt,
      images: [
        'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80'
      ]
    },
    {
      id: 7,
      title: 'Parking Space',
      description: 'Secure parking available for bikes and cars with ample space.',
      icon: Car,
      images: [
        'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&q=80'
      ]
    },
    {
      id: 8,
      title: 'Lift Facility',
      description: 'Modern lift facility for convenient access to all floors.',
      icon: Building2,
      images: [
        'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80'
      ]
    },
    {
      id: 9,
      title: 'Terrace Access',
      description: 'Spacious terrace area perfect for relaxation and social gatherings.',
      icon: Users,
      images: [
        'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&q=80'
      ]
    }
  ];

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const feature = features[currentFeature];
  const Icon = feature.icon;

  return (
    <section id="amenities" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Amenities</h2>
          <p className="text-xl text-gray-600">Experience world-class facilities at Liberty PG</p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Images Section */}
            <div className="relative h-[400px] lg:h-[600px]">
              <div className="absolute inset-0 grid grid-cols-2 gap-2 p-4">
                {feature.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-lg ${
                      feature.images.length === 1
                        ? 'col-span-2'
                        : idx === 0
                        ? 'col-span-2'
                        : ''
                    }`}
                  >
                    <img
                      src={img}
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-6">
                <span className="text-blue-600 font-semibold text-lg">
                  {String(currentFeature + 1).padStart(2, '0')} / {String(features.length).padStart(2, '0')}
                </span>
              </div>

              <div className="mb-6">
                <Icon className="text-blue-600 mb-4" size={48} />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{feature.title}</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">{feature.description}</p>

              {/* Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevFeature}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextFeature}
                  className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFeature(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentFeature ? 'bg-blue-600 w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;