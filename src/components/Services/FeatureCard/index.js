import React from 'react';

const FeatureCard = ({
  title,
  description,
  icon,
  hoverEffect = true,
  className = '',
  iconBackground = 'bg-yellow-500',
  iconColor = 'text-black',
  titleColor = 'text-white',
  descriptionColor = 'text-gray-400',
}) => {
  return (
    <div 
      className={`
        bg-gray-900 rounded-lg p-8 shadow-lg 
        ${hoverEffect ? 'transform transition duration-300 hover:-translate-y-2' : ''}
        ${className}
      `}
    >
      {icon && (
        <div className={`w-16 h-16 ${iconBackground} rounded-full flex items-center justify-center mb-6`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt={title} className="w-8 h-8" />
          ) : (
            <div className={iconColor}>{icon}</div>
          )}
        </div>
      )}
      <h3 className={`text-xl font-bold ${titleColor} mb-4`}>{title}</h3>
      <p className={descriptionColor}>{description}</p>
    </div>
  );
};

export default FeatureCard;