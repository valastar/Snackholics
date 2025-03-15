import React, { useEffect } from 'react';
import './MakeDifferent.scss'; // Keep the original SCSS for reference
import AOS from 'aos';

function MakeDifferent(props) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className={`py-24 ${props.classProps}`}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                        {props.title}
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.dataList.map((item, index) => (
                        <div 
                            className="col-span-1" 
                            data-aos="fade-up" 
                            data-aos-duration="1000" 
                            data-aos-delay={index * 100}
                            key={index}
                        >
                            <div className="bg-yellow-500 rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl h-full">
                                {item.img && (
                                    <img 
                                        src={item.img} 
                                        alt={`Icon for ${item.heading}`} 
                                        className="w-20 h-20 mb-6"
                                    />
                                )}
                                <h3 className="text-2xl font-bold text-white mb-4">{item.heading}</h3>
                                <p className="text-black font-medium">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MakeDifferent;