import React, { useEffect } from "react";
import AOS from 'aos';
import "./AiSuccess.scss"

export default function AiSuccess() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="AiSuccess">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="block ai-success">
                            <div className="row">
                                <div className="col-md-6 col-6 my-2 px-2" key=''>
                                    <div className="experties" data-aos="fade-up" data-aos-duration="2000">
                                        <h4>07+ </h4>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 my-2 px-2" key=''>
                                    <div className="experties" data-aos="fade-up" data-aos-duration="2000">
                                        <h4>35+ </h4>
                                        <p>Team Members</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 my-2 px-2" key=''>
                                    <div className="experties" data-aos="fade-up" data-aos-duration="2000">
                                        <h4>98% </h4>
                                        <p>Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6 my-2 px-2" key=''>
                                    <div className="experties" data-aos="fade-up" data-aos-duration="2000">
                                        <h4>35+ </h4>
                                        <p>Delivered Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="title">
                            <h2>PoC First: Your Path
                            to <span> AI Success</span></h2>
                            <p>To avoid wasting time and effort, always ask your AI solutions consultant for a proof of concept. Our process includes identifying business objectives, data assessment, selecting AI technologies, developing the PoC or MVP, and evaluating its performance.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}