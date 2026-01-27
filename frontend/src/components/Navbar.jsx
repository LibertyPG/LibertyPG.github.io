import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ onEnquireClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://customer-assets.emergentagent.com/job_liberty-stays/artifacts/tcxqm9as_LOGO.png"
            alt="Liberty PG"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </a>
          <a href="#amenities" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Amenities
          </a>
          <a href="#property" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Our Property
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Reviews
          </a>
          <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            FAQ
          </a>
          <Button
            onClick={onEnquireClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300 hover:shadow-lg"
          >
            ENQUIRE NOW
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4 px-4 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </a>
          <a href="#amenities" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Amenities
          </a>
          <a href="#property" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Our Property
          </a>
          <a href="#reviews" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Reviews
          </a>
          <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">
            FAQ
          </a>
          <Button
            onClick={onEnquireClick}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-300"
          >
            ENQUIRE NOW
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;