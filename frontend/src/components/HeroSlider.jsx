import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSlider = ({ onEnquireClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://customer-assets.emergentagent.com/job_0d2be8c3-a8ba-405e-a0d6-6243d0523c20/artifacts/p07p5lj1_IMG_0719.heic',
      title: 'Fully Furnished PG',
      subtitle: 'for Boys in Ahmedabad'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_0d2be8c3-a8ba-405e-a0d6-6243d0523c20/artifacts/wygejy4g_IMG_0789.heic',
      title: 'Modern Living Spaces',
      subtitle: 'Designed for Comfort'
    },
    {
      image: 'https://customer-assets.emergentagent.com/job_0d2be8c3-a8ba-405e-a0d6-6243d0523c20/artifacts/r2iymmpf_IMG_0791.heic',
      title: 'Premium Amenities',
      subtitle: 'Everything You Need'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`
            }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in-up">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-center animate-fade-in-up animation-delay-200">
              {slide.subtitle}
            </p>
            <Button
              onClick={onEnquireClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-6 text-lg rounded-md transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up animation-delay-400"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="text-white" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="text-white" size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;