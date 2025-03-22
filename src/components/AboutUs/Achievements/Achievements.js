import React, { useEffect } from 'react';
import AOS from 'aos';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Achievements() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="py-20 border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-center">
                    {/* Heading */}
                    <div className="md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                        <h3 className="text-4xl font-bold text-white">
                            Quick <span className="text-yellow-500">facts</span>
                        </h3>
                    </div>

                    {/* Statistics */}
                    {[  
                        { value: 7, label: "Years of Experience" },
                        { value: 5, label: "Team Members" },
                        { value: 50, label: "Satisfied Clients" },
                        { value: 30, label: "Delivered Products" }
                    ].map((stat, index) => (
                        <div key={index} className="relative" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100}>
                            <div className="relative inline-block">
                                <p className="text-5xl font-bold text-white mb-2">
                                    <CountUp end={stat.value} duration={10} suffix="+">
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start}>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </p>
                                <span className="text-gray-400 text-lg">{stat.label}</span>
                            </div>
                            {index !== 3 && (
                                <div className="absolute top-1/2 transform -translate-y-1/2 right-0 h-16 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent md:block hidden" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Achievements;
