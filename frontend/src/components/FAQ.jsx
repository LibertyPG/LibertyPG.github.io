import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Can I have a short stay at Liberty PG?',
      answer: 'Absolutely! At Liberty PG, we welcome individuals for shorter durations. Please contact us to discuss your specific requirements and we\'ll do our best to accommodate you.'
    },
    {
      question: 'How do I enquire about Liberty PG?',
      answer: 'Just relax! Click on the \'ENQUIRE NOW\' button at the top of the page or fill out the enquiry form. Someone from our team will reach out to you shortly with all the details you need.'
    },
    {
      question: 'What areas does Liberty PG operate in?',
      answer: 'Liberty PG is located in Mithakhali Six Roads, Navrangpura, Ahmedabad - one of the most convenient and well-connected areas in the city.'
    },
    {
      question: 'What type of rooms are available?',
      answer: 'We offer a variety of room options to suit your preferences and budget: Single Sharing, Twin Sharing, Triple Sharing, Four Sharing, and Five Sharing rooms. All rooms are fully furnished with modern amenities.'
    },
    {
      question: 'What amenities do you provide?',
      answer: 'Liberty PG offers comprehensive amenities including: Hygienic home-style food, Fully furnished rooms with AC, High-speed WiFi, Laundry service, Lift facility, Parking for bikes and cars, Terrace access, 24/7 security, Power backup, and RO water.'
    },
    {
      question: 'How is Liberty PG different from other local PGs in Ahmedabad?',
      answer: 'Simply put – every local PG will feel like just another stay. But Liberty PG offers a different experience altogether. We focus on creating a safe, comfortable, and homely environment with premium amenities, professional management, and a vibrant community atmosphere. It truly feels like home!'
    },
    {
      question: 'Is food included in the pricing?',
      answer: 'Yes, we provide hygienic and delicious home-style meals. The food is prepared with utmost care and hygiene standards. Specific meal plans and pricing details will be shared when you enquire.'
    },
    {
      question: 'What are the security measures in place?',
      answer: 'Security is our top priority. We have 24/7 security personnel, biometric entry systems, CCTV surveillance throughout the property, and secure access to all floors. Your safety and peace of mind are guaranteed.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we provide secure parking space for both bikes and cars for our residents.'
    },
    {
      question: 'Can I visit the property before booking?',
      answer: 'Absolutely! We encourage potential residents to visit the property and see for themselves. Please contact us to schedule a visit at your convenience.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">Got questions? We've got answers!</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-0"
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;