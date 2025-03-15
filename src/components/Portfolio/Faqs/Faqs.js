import React, { useEffect, useState } from 'react'
import './Faqs.scss' // Keep the original SCSS for reference
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Faqs() {
    useEffect(() => {
        AOS.init();
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    const faqItems = [
        {
            question: "What is VR training?",
            answer: "This is a training method that uses virtual reality to simulate working environments and risk-free safety, health and environment (EHS) situations."
        },
        {
            question: "What makes VR training more effective than traditional methods?",
            answer: "VR enables complete, interactive immersion, improving information retention and risk understanding."
        },
        {
            question: "Is virtual reality training suitable for all sectors?",
            answer: "Virtue-Simulation Safety Company offers cutting-edge AR/VR training solutions to improve occupational health and safety. Our immersive simulations recreate real-world scenarios to enhance workplace safety, prevent accidents, and ensure compliance across high-risk industries."
        },
        {
            question: "What equipment is needed for virtual reality training?",
            answer: "Virtual reality training requires a VR headset, motion controllers, and a compatible computer or gaming console. Depending on the setup, additional equipment like sensors or gloves may be used to enhance the immersive experience."
        },
        {
            question: "How to measure the effectiveness of VR training?",
            answer: "The effectiveness of VR training can be measured through employee performance assessments, real-time feedback, knowledge retention tests, and safety incident tracking. Improvements in skill application and reduced workplace accidents are key indicators of successful training."
        },
        {
            question: "Does Immersive Factory offer support for setting up VR training courses?",
            answer: "Yes, Immersive Factory offers comprehensive support for setting up VR training courses, including installation guidance, technical assistance, and customization to meet specific industry needs, ensuring a seamless integration into your safety training program."
        }
    ];

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24" id="faqs">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="text-yellow-500">Questions</span>
                    </h2>
                </div>
                
                <div className="space-y-4" data-aos="fade-left" data-aos-duration="1000">
                    {faqItems.map((faq, index) => (
                        <div 
                            key={index}
                            className="bg-neutral-800 rounded-xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                            >
                                <h3 className="text-lg md:text-xl font-medium text-white pr-8">
                                    {faq.question}
                                </h3>
                                <span className={`text-yellow-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ${
                                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-16" data-aos="fade-up" data-aos-duration="1000">
                    <Link 
                        to="/contact-us" 
                        className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-full transition-all duration-300 hover:bg-yellow-600 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                        BOOK A CALL
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Faqs