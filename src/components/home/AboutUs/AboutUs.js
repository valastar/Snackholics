import React, { useEffect } from 'react'
import './AboutUs.scss'
import AOS from 'aos';
import { Link } from 'react-scroll';

function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="aboutUs">
            <div className="container">
                <div className="content" data-aos="fade-up" data-aos-duration="1000">
                    <p className='hello'>Hello!</p>
                    <p className='want'><span>Want to create a digital product that stands out?</span> We're here to help a team of 100+ experts who design, build, and scale business for top brands and startups. Using the emerging technologies, we create solutions that are not just functional but also visually stunning and user-friendly. Let's work together to bring your vision to life."</p>
                </div>
               <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/" className="btn-custom">Let’s talk</Link>
               </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutUs
