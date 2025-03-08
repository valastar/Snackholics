import React, { useEffect } from 'react'
import './whyChoose.scss'
import AOS from 'aos';

const WhyChoose = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "date": "01/05",
            "title": "User-first SEM Approach",
          "description": "Our SEM strategy enhances user experience to help Canadian customers find what they need quickly."
        },
        {
          "date": "02/05",
            "title": "Comprehensive Services",
          "description": "Partnering with us for SEM in Canada gives you all the services needed for online growth under one roof."
        },
        {
          "date": "03/05",
            "title": "Tailored SEM Services",
          "description": "We offer tailored SEM services in Canada, recognizing that your unique business needs a customized approach."
        },
        {
          "date": "04/05",
            "title": "Proven SEM Strategies",
          "description": "We implement effective SEM strategies in Canada, using A/B testing to find what delivers the best results for your business."
        },
        {
          "date": "05/05",
            "title": "Result-driven SEM Service",
          "description": "We prioritize results and ROI for your Canadian business, focusing on revenue rather than vanity metrics."
        }
      ]
  return (
    <React.Fragment>
            <div className="wcu-quick">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Why Choose  <span>Quick Growth</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                               <div className='col-lg-6'>
                                    <img src='/images/services/wcu-quick.svg' width='100%' alt='Why Choose Us' />
                               </div>
                               <div className='col-lg-6'>
                                 <div className='row'>
                                 {slideData.map((item, index) => (
                                    <div className='col-12' key={index}>
                                        <div className="wcu-quick__card">
                                            <span>{item.date}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                 ))}
                                 </div>
                               </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default WhyChoose