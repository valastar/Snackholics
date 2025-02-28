import React from 'react'
import './AboutBanner.scss'
function AboutBanner() {
    return (
        <React.Fragment>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>About Us</h2>
                                <p>We will help a client's problems to develop the product s they have with high quality Change the appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="aboutBanner">
            <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="bannerContent">
                            <div className="title" data-aos="fade-right" data-aos-duration="1000">
                                <h2>Our <span>Story</span></h2>
                                <p>Our team has a reputation for its mastery in tackling intricate and challenging software projects - we thrive on complexity and have a proven track record of successfully delivering solutions that others find daunting.</p>
                                <p>We have quickly grown into a sophisticated organization, serving a diverse clientele ranging from dynamic startups to established enterprises. We expanded our expertise beyond blockchain to encompass a wide spectrum of cutting edge technologies. Our portfolio of successful projects showcases our commitment to excellence and our ability to adapt, innovate, and deliver results.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="aboutImg" data-aos="fade-left" data-aos-duration="1000">
                                <img src="/images/aboutUs/story.svg" alt="aboutImg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AboutBanner
