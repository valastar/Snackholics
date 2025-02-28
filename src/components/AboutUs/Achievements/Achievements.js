import React, { useEffect } from 'react'
import './Achievements.scss'
import AOS from 'aos';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";


function Achievements() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="achievements">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <h3 className='heading'>Quick <span>facts</span></h3>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={7} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Years of Experience</span>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={35} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Team Members</span>
                            </div>
                        </div>
                        <div className="col-md-3" data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className="block">
                                <p><CountUp end={30} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Delivered Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Achievements
