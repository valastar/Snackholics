import React, { useEffect } from 'react'
import AOS from 'aos';

const LeadingCompany = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="needMaintenance">
                <div className="container">
                    <div className="row align-items-center" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col-lg-7 col-md-12">
                            <div className="title">
                                <h2>Leading Mobile App  <span>Development Company</span></h2>
                                <div className="line"></div>
                                <p>No matter how broad or complex your demands are, Quick Growth covers the full mobile app development cycle, from concept through mobile application creation. Our proficiency to satisfy your demands is based on a team of professionals with years of expertise in the global web and mobile apps solution services and product engineering sectors.</p>
                                <p>In our work center, we have a team of over 160+ colleagues (UI/UX designers, mobile app developers, quality analysts, and marketers) who provide strategically designed and creatively made mobile application development services to help you grow your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="imgBlock">
                                <img src="/images/services/leadingApp.svg" alt="leadingApp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LeadingCompany