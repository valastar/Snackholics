import React from 'react'
import './ContactBanner.scss'
import { Link } from 'react-router-dom'
function ContactBanner() {
    return (
        <React.Fragment>
                <div className="contactBanner">
                    <div className="container">
                        <div className="row">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Contact us</h2>
                                <p>We will help a client's problems to develop the product s they have with high quality Change the appearance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactInfo">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="info">
                                <img src="/images/contact/location.svg" alt="location" />
                                <h3>Toronto, Canada</h3>
                                <p className='subTitle'>Quick Growth Marketing</p>
                                <p className='title'>123 Main Street Toronto, Ontario <br />
                                M4B 183</p>
                                <div className="block">
                                    <p>Office Hours</p>
                                    <span>9:00am – 5:30pm (Mon to Fri)</span>
                                </div>
                                <a href="tel:+15879196296">Phone: <span>+15879196296</span></a>
                                <a href="mailto:Outreach@quickgrowth.ai">Email: <span>Outreach@quickgrowth.ai</span></a>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="info">
                            <img src="/images/contact/emergency.svg" alt="emergency" />
                                <h3>24 / 7 Emergency Support</h3>
                                <p className='subTitle'>Support Desk</p>
                                <p className='title'>Need technical assistance?
                                Our Support Desk is available 24 / 7.</p>
                                <div className="block">
                                    <span>
                                    Log all service requests through Support Desk. Maximum response time is 3 hours.
                                    </span>
                                </div>
                                <Link to="/" className="btn-custom">Support</Link>
                                </div>
                                </div>
                    </div>
                    </div>
                </div>
           
        </React.Fragment>
    )
}

export default ContactBanner
