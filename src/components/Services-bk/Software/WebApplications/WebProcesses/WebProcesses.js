import React, { useEffect } from 'react'
import './WebProcesses.scss'
import AOS from 'aos';

const WebProcesses = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="WebProcesses">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Customized Business <span>Solutions</span></h2>
                    </div>
                    <div className="block">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-1.svg" alt="Web Process Img" />
                                <p>1</p>
                                <span>Design</span>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-2.svg" alt="Web Process Img" />
                                <p>2</p>
                                <span>Prototype</span>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-3.svg" alt="Web Process Img" />
                                <p>3</p>
                                <span>Development</span>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-4.svg" alt="Web Process Img" />
                                <p>4</p>
                                <span>Software Quality
                                    Assurance</span>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-5.svg" alt="Web Process Img" />
                                <p>5</p>
                                <span>DevOps Service</span>
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="/images/services/web-process-6.svg" alt="Web Process Img" />
                                <p>6</p>
                                <span>Support & Maintenance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WebProcesses