import React from 'react';
import { useParams } from 'react-router-dom';

// Import only essential components
import Header from '../../../components/Header/Header';
import Footer from '../../..//components/Footer/Footer';

// Service configuration data
import serviceConfig from '../serviceConfig';

const ServicePage = () => {
  // Get the service path from the URL
  const { servicePath } = useParams();
  
  // Find the service configuration based on the URL path
  const service = serviceConfig[servicePath] || {};
  
  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <section className="relative bg-gray-900 text-white">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: `url(${service.bannerImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {service.title}
              {service.titleSpan && <span className="text-yellow-500"> {service.titleSpan}</span>}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{service.description}</p>
            
            {/* Call to action button */}
            {service.showCTA && (
              <a 
                href="/contact-us" 
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Get Started
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-400 hover:text-white">Home</a>
            <span className="mx-2 text-gray-600">/</span>
            <a href={`/services/${service.category}`} className="text-gray-400 hover:text-white">
              {service.categoryName}
            </a>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-yellow-500">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {service.introTitle}
                {service.introTitleSpan && <span className="text-yellow-500"> {service.introTitleSpan}</span>}
              </h2>
              <p className="text-gray-300 mb-6">{service.introDescription}</p>
              {service.introParagraph2 && <p className="text-gray-300">{service.introParagraph2}</p>}
            </div>
            <div className="md:w-1/2">
              <img src={service.introImage} alt={service.title} className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {service.features && (
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {service.featuresTitle}
                {service.featuresTitleSpan && <span className="text-yellow-500"> {service.featuresTitleSpan}</span>}
              </h2>
              {service.featuresDescription && (
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.featuresDescription}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-900 rounded-lg p-8 shadow-lg transform transition duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      {service.processes && (
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {service.processTitle}
                {service.processTitleSpan && <span className="text-yellow-500"> {service.processTitleSpan}</span>}
              </h2>
              {service.processDescription && (
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{service.processDescription}</p>
              )}
            </div>
            
            <div className="max-w-4xl mx-auto">
              {service.processes.map((process, index) => (
                <div key={index} className="flex mb-12 last:mb-0">
                  <div className="mr-6 relative">
                    <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-xl z-10 relative">
                      {index + 1}
                    </div>
                    {index !== service.processes.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-1/2 w-1 -ml-0.5 bg-gray-700"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Showcase/Portfolio */}
      {service.showcaseItems && (
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {service.showcaseTitle || "Our Recent Work"}
                {service.showcaseTitleSpan && <span className="text-yellow-500"> {service.showcaseTitleSpan}</span>}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.showcaseItems.map((item, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <div className="relative group">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className="text-center p-4">
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.subtitle}</p>
                        <a href={item.link || "#"} className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-600 transition duration-300">
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/portfolio" 
                className="inline-block border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold py-3 px-8 rounded-full transition duration-300"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Carousel */}
      {service.showTestimonials && (
        <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-500">
                    <img 
                      src="/images/home/client1.svg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <p className="text-gray-300 italic mb-6">
                    "Working with Quick Growth transformed our online presence completely. Their team was professional, 
                    responsive, and delivered beyond our expectations. Our new website not only looks fantastic but has 
                    significantly increased our conversion rates."
                  </p>
                  <div>
                    <p className="text-white font-bold">Sarah Johnson</p>
                    <p className="text-yellow-500">Marketing Director, TechVision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {service.faqs && (
        <section className="bg-gray-800 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {service.faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="font-bold text-xl text-white mb-3">{faq.question}</div>
                    <div className="text-gray-400">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project requirements and discover how our 
            {service.name} services can help your business grow.
          </p>
          <a 
            href="/contact-us" 
            className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ServicePage;