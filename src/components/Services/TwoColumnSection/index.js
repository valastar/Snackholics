import React from 'react';

const TwoColumnSection = ({
  title,
  titleSpan,
  description,
  paragraph2,
  image,
  imageAlt,
  imagePosition = 'right', // 'right' or 'left'
  bgColor = 'bg-gray-900',
  textColor = 'text-white',
  accentColor = 'text-yellow-500',
  paragraphColor = 'text-gray-300',
  children,
}) => {
  const isImageRight = imagePosition === 'right';

  return (
    <section className={`${bgColor} py-20`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {!isImageRight && (
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img src={image} alt={imageAlt || title} className="rounded-lg shadow-2xl" />
            </div>
          )}
          
          <div className={`md:w-1/2 ${isImageRight ? 'md:pr-10' : 'md:pl-10'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor} mb-6`}>
              {title}
              {titleSpan && <span className={accentColor}> {titleSpan}</span>}
            </h2>
            <p className={`${paragraphColor} mb-6`}>{description}</p>
            {paragraph2 && <p className={paragraphColor}>{paragraph2}</p>}
            {children}
          </div>
          
          {isImageRight && (
            <div className="md:w-1/2">
              <img src={image} alt={imageAlt || title} className="rounded-lg shadow-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnSection;