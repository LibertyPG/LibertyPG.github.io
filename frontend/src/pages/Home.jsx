import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import MainIntro from '../components/MainIntro';
import FeaturesCarousel from '../components/FeaturesCarousel';
import PropertyCard from '../components/PropertyCard';
import Statistics from '../components/Statistics';
import Reviews from '../components/Reviews';
import EnquiryForm from '../components/EnquiryForm';
import FAQ from '../components/FAQ';
import InstagramFeed from '../components/InstagramFeed';

const Home = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen">
      <HeroSlider onEnquireClick={() => setShowEnquiry(true)} />
      <MainIntro />
      <FeaturesCarousel />
      <PropertyCard onEnquireClick={() => setShowEnquiry(true)} />
      <Statistics />
      <Reviews />
      <InstagramFeed />
      <FAQ />
      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
    </div>
  );
};

export default Home;