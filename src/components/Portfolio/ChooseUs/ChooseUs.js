import React, {useEffect} from "react";
import AOS from 'aos';
import "./ChooseUs.scss" // Keep the original SCSS for reference
import chooseList from "./chooseList.json"

export default function ChooseUs() {
    useEffect(() => {
        AOS.init();
    }, [])
    
    return(
        <section className="relative py-24 overflow-hidden bg-yellow-500">
            {/* Background Pattern */}
            <div 
                className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-50" 
                style={{ backgroundImage: "url('/images/portfolio/chooseBack.svg')" }}
            ></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Section - Title and Description */}
                    <div className="lg:col-span-5" data-aos="fade-right" data-aos-duration="1000">
                        <div className="max-w-lg">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#521212] mb-6">
                                Why Customers Choose Us
                            </h2>
                            <p className="text-xl text-black/70">
                                Best features with the latest technologies to make fast and modern website.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Section - Grid of Features */}
                    <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="1000">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            {chooseList.map(({chooseTitle, chooseImg}, index) => (
                                <div 
                                    key={index} 
                                    className="relative"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="text-center p-4 transition-all duration-300 transform hover:-translate-y-2">
                                        <img 
                                            src={chooseImg} 
                                            alt={chooseTitle} 
                                            className="w-20 h-20 mx-auto mb-4"
                                        />
                                        <h4 className="text-base font-semibold text-[#521212] whitespace-pre-line">
                                            {chooseTitle}
                                        </h4>
                                    </div>
                                    
                                    {/* Decorative lines for grid effect (except last row and last column) */}
                                    {index % 3 !== 2 && index < chooseList.length - 3 && (
                                        <div className="absolute right-0 top-1/2 w-px h-8 transform -translate-y-1/2 bg-[#521212]/20"></div>
                                    )}
                                    {index < chooseList.length - 3 && (
                                        <div className="absolute bottom-0 left-1/2 w-8 h-px transform -translate-x-1/2 bg-[#521212]/20"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}