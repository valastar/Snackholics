import React, { useEffect } from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';
function Footer() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-right"
                            data-aos-duration="1000">
                            <div className="logo">
                                <img src="/images/logo.svg" alt="logo" />
                            </div>
                            <p>At <span>Quick Growth</span>, we offer affordable and comprehensive solutions, that empower drive growth, and enhance efficiency to meet your unique needs.</p>
                            <div className="social">
                                <Link to=""><img src="/images/footer/social1.svg" alt="socialIcon" /></Link>
                                <Link to=""><img src="/images/footer/social2.svg" alt="socialIcon" /></Link>
                                <Link to=""><img src="/images/footer/social3.svg" alt="socialIcon" /></Link>
                                <Link to=""><img src="/images/footer/social4.svg" alt="socialIcon" /></Link>
                                <Link to=""><img src="/images/footer/social5.svg" alt="socialIcon" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-down"
                            data-aos-duration="1000">
                            <div className="links">
                                <h4>Company</h4>
                                <ul>
                                    <li><Link to="/about-us">About Us</Link></li>
                                    <li><Link to="/contact-us">Location</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/contact-us">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-down"
                            data-aos-duration="1000">
                            <div className="links">
                                <h4>Services</h4>
                                <ul>
                                    <li><Link to="">Artificial Intelligence</Link></li>
                                    <li><Link to="/services/web/website-design-development">Web Development</Link></li>
                                    <li><Link to="">Software Development</Link></li>
                                    <li><Link to="/services/digital-marketing/seo">Digital Marketing</Link></li>
                                    <li><Link to="/services/branding">Branding</Link></li>
                                    <li><Link to="/services/hosting">Hosting</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-left"
                            data-aos-duration="1000">
                            <div className="links">
                                <h4>Join our Newsletter</h4>
                                <div className="formGroup">
                                    <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                                    <button>Subscribe</button>
                                </div>
                                <p>We will send you weekly updates for your better Product management.</p>
                            </div>
                        </div>
                    </div>
                    <div className="copRight">
                        <p>Copyright 2024 <span>Quick Growth.</span></p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
