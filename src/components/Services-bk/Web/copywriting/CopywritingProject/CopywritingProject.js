import React, { useEffect } from 'react'
import './CopywritingProject.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom'
function CopywritingProject() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Schedule a call',
            imageSrc: '/images/services/ps1.svg',
            description: 'Get in touch to schedule your complimentary 30-minute virtual coffee meeting.'
        },
        {
            title: 'Share your goals',
            imageSrc: '/images/services/ps2.svg',
            description: 'We’ll discuss your copywriting needs and come up with a plan to help you achieve your goals.'
        },
        {
            title: 'Engage your audience',
            imageSrc: '/images/services/ps3.svg',
            description: 'If we’re a good fit, we’ll work together to grow your success with a clear message and words that work.'
        },
    ]
    return (
        <React.Fragment>
            <div className="copywritingProject">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>It’s easy to get your
                        <span> project started!</span></h2>
                        <p>Quick Growth provides comprehensive services to help businesses innovate, expand, and thrive in competitive markets</p>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
                        </div>
                    </div>
                    <div className='copywritingLine' data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="copywritingProject__card">
                                        <span>{index+1}</span>
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CopywritingProject
