import React, { useState } from 'react';

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="mb-6">
      <div 
        className="bg-gray-900 rounded-lg p-6 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-white">{question}</div>
          <div className="text-yellow-500">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>
        
        {isOpen && (
          <div className="mt-4 text-gray-400 transition-all duration-300 ease-in-out">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

const FaqSection = ({ 
  title = 'Frequently Asked Questions',
  faqs = [],
  bgColor = 'bg-gray-800',
  titleColor = 'text-white',
}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${bgColor} py-20`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
            {title}
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;