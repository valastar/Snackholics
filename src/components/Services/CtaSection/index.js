import React from 'react';

const CtaSection = ({
  title = 'Ready to Get Started?',
  description = 'Contact us today to discuss your project requirements and discover how our services can help your business grow.',
  buttonText = 'Contact Us Now',
  buttonLink = '/contact-us',
  bgColor = 'bg-yellow-500',
  textColor = 'text-black',
  buttonBgColor = 'bg-black',
  buttonTextColor = 'text-white',
}) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
          {title}
        </h2>
        <p className={`text-xl ${textColor} opacity-80 mb-8 max-w-3xl mx-auto`}>
          {description}
        </p>
        <a 
          href={buttonLink} 
          className={`inline-block ${buttonBgColor} hover:bg-opacity-90 ${buttonTextColor} font-bold py-4 px-10 rounded-full transition duration-300 text-lg`}
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;