import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';

const EnquiryForm = ({ onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    roomType: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${BACKEND_URL}/api/enquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Enquiry Submitted!',
          description: data.message || 'Thank you for your interest. We\'ll contact you soon.',
          duration: 5000
        });
        
        // Send WhatsApp notification
        sendWhatsAppNotification();
        
        // Reset form
        setFormData({
          name: '',
          contact: '',
          email: '',
          roomType: '',
          message: ''
        });
        
        // Close form after delay
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error(data.detail || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit enquiry. Please try again or contact us directly.',
        variant: 'destructive',
        duration: 5000
      });
    }
  };

  const sendWhatsAppNotification = () => {
    // Format message for WhatsApp
    const message = `*New Enquiry - Liberty PG*

Name: ${formData.name}
Contact: ${formData.contact}
Email: ${formData.email || 'Not provided'}
Room Type: ${formData.roomType}
Message: ${formData.message || 'No message'}

Please contact the customer at the earliest!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Your WhatsApp number
    const whatsappNumber = '917862931746';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab (this will send the notification)
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Enquire Now</h2>
            <p className="text-blue-100">Grab your spot NOW—exclusive early bird offer vanishing FAST!</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number *</Label>
            <Input
              id="contact"
              type="tel"
              placeholder="Enter your mobile number"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="roomType">Preferred Room Type *</Label>
            <Select
              value={formData.roomType}
              onValueChange={(value) => setFormData({ ...formData, roomType: value })}
              required
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Room Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single Sharing</SelectItem>
                <SelectItem value="twin">Twin Sharing</SelectItem>
                <SelectItem value="triple">Triple Sharing</SelectItem>
                <SelectItem value="four">Four Sharing</SelectItem>
                <SelectItem value="five">Five Sharing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <textarea
              id="message"
              rows={4}
              placeholder="Any specific requirements or questions?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg rounded-md transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Send size={20} />
            <span>Submit Enquiry</span>
          </Button>
        </form>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 rounded-b-2xl border-t">
          <p className="text-center text-gray-700 mb-2">
            <strong>Or reach us directly:</strong>
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
            <a href="tel:+917862931746" className="hover:text-blue-600 transition-colors">
              +91 7862931746
            </a>
            <a href="tel:+919636484074" className="hover:text-blue-600 transition-colors">
              +91 9636484074
            </a>
            <a href="mailto:info.libertypg@gmail.com" className="hover:text-blue-600 transition-colors">
              info.libertypg@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;