import React from 'react';

const Section = ({
  title,
  titleSpan,
  description,
  bgColor = 'bg-gray-900',
  children,
  className = '',
  centered = true,
  contentWidth = 'max-w-6xl', // Default max width
  paddingY = 'py-20', // Default vertical padding
}) => {
  return (
    <section className={`${bgColor} ${paddingY} ${className}`}>
      <div className={`container mx-auto px-4 ${contentWidth} ${centered ? 'mx-auto' : ''}`}>
        {(title || description) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {title}
                {titleSpan && <span className="text-yellow-500"> {titleSpan}</span>}
              </h2>
            )}
            {description && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default Section;