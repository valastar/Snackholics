import React from 'react';

const ProjectCard = ({
  title,
  subtitle,
  image,
  link = '#',
  buttonText = 'View Project',
  imageHeight = 'h-64',
  className = '',
}) => {
  return (
    <div className={`overflow-hidden rounded-lg shadow-lg ${className}`}>
      <div className="relative group">
        <img 
          src={image} 
          alt={title} 
          className={`w-full ${imageHeight} object-cover transform transition duration-500 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="text-center p-4">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {subtitle && <p className="text-gray-300 text-sm">{subtitle}</p>}
            <a 
              href={link} 
              className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-600 transition duration-300"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;