import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_liberty-stays/artifacts/tcxqm9as_LOGO.png"
              alt="Liberty PG"
              className="h-16 mb-4"
            />
            <p className="text-gray-400 leading-relaxed">
              Liberty PG offers premium, fully-furnished accommodation for boys in Ahmedabad. 
              Experience comfortable living with modern amenities and a supportive community.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="flex-shrink-0 text-blue-400" size={20} />
                <p className="text-gray-400">
                  Mithakhali Six Roads, Navrangpura,<br />
                  Ahmedabad - 380006
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-blue-400" size={20} />
                <div className="text-gray-400">
                  <a href="tel:+917862931746" className="hover:text-white transition-colors block">
                    +91 7862931746
                  </a>
                  <a href="tel:+919636484074" className="hover:text-white transition-colors block">
                    +91 9636484074
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-blue-400" size={20} />
                <a
                  href="mailto:info.libertypg@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info.libertypg@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2 mb-6">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </a>
              <a href="#amenities" className="block text-gray-400 hover:text-white transition-colors">
                Amenities
              </a>
              <a href="#property" className="block text-gray-400 hover:text-white transition-colors">
                Our Property
              </a>
              <a href="#reviews" className="block text-gray-400 hover:text-white transition-colors">
                Reviews
              </a>
              <a href="#faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/libertypg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/libertypg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-pink-600 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/libertypg"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 hover:bg-blue-400 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Liberty PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;