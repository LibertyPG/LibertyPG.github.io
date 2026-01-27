import React from 'react';
import { Home, Shield, Users, Award } from 'lucide-react';

const MainIntro = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fully Furnished PG in Ahmedabad
            <br />
            <span className="text-blue-600">Designed for Students & Working Professionals</span>
          </h2>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
          <p className="text-center text-lg">
            Looking for the best <strong>PG in Ahmedabad</strong>? Your search ends with <strong>Liberty PG</strong>. 
            Unlike traditional paying guests, Liberty PG focuses on creating a superior living experience for students 
            and young professionals. Located in the prime area of <strong>Navrangpura</strong>, Liberty PG blends comfort 
            and luxury, aiming to make living memorable. With top-notch amenities and a safe environment, Liberty PG 
            provides well-equipped accommodation for boys in Ahmedabad.
          </p>
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Happy Living!</h3>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <Home className="text-blue-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Fully Furnished</h4>
            <p className="text-gray-600">Modern, comfortable rooms with all essential amenities</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h4>
            <p className="text-gray-600">24/7 security with biometric entry system</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
              <Users className="text-yellow-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Community Living</h4>
            <p className="text-gray-600">Interactive spaces to build lasting friendships</p>
          </div>

          <div className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 bg-white">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
              <Award className="text-purple-600" size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
            <p className="text-gray-600">Hygienic food and excellent maintenance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIntro;