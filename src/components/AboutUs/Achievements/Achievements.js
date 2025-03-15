import React, { useEffect } from 'react'
import AOS from 'aos';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Achievements() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="py-20 border-b border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                {/* Heading */}
                <div className="md:col-span-1" data-aos="fade-up" data-aos-duration="1000">
                    <h3 className="text-4xl font-bold">
                        Quick <span className="text-yellow-500">facts</span>
                    </h3>
                </div>

                {/* Years of Experience */}
                <div className="md:col-span-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <div className="text-center relative">
                        <div className="md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-16 md:after:bg-gradient-to-b md:after:from-transparent md:after:via-yellow-500 md:after:to-transparent">
                            <p className="text-5xl font-bold text-white mb-2">
                                <CountUp end={7} duration={10} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <span className="text-gray-400 text-lg">Years of Experience</span>
                        </div>
                    </div>
                </div>

                {/* Team Members */}
                <div className="md:col-span-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="text-center relative">
                        <div className="md:after:content-[''] md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-px md:after:h-16 md:after:bg-gradient-to-b md:after:from-transparent md:after:via-yellow-500 md:after:to-transparent">
                            <p className="text-5xl font-bold text-white mb-2">
                                <CountUp end={35} duration={10} suffix="+">
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </p>
                            <span className="text-gray-400 text-lg">Team Members</span>
                        </div>
                    </div>
                </div>

                {/* Delivered Products */}
                <div className="md:col-span-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <div className="text-center">
                        <p className="text-5xl font-bold text-white mb-2">
                            <CountUp end={30} duration={10} suffix="+">
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </p>
                        <span className="text-gray-400 text-lg">Delivered Products</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements