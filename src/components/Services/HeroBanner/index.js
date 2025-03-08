import React from 'react';

const HeroBanner = ({
  title,
  titleSpan,
  description,
  image,
  cta = {
    show: true,
    text: 'Get Started',
    link: '/contact-us',
  },
  height = 'py-32', // Default padding top/bottom
  overlayOpacity = 'bg-opacity-70', // Default overlay opacity
}) => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute inset-0 bg-black ${overlayOpacity}`}></div>
      </div>
      
      {/* Content */}
      <div className={`container mx-auto px-4 ${height} relative z-10`}>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
            {titleSpan && <span className="text-yellow-500"> {titleSpan}</span>}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{description}</p>
          
          {/* Call to action button */}
          {cta.show && (
            <a 
              href={cta.link} 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300"
            >
              {cta.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;