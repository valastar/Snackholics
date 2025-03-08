import React, { useEffect } from 'react'
import './CrossPlatform.scss'
import AOS from 'aos';

const CrossPlatform = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      return (
        <React.Fragment>
            <div className="CrossPlatform">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Cross-Platform  <span>Chatbot Integration</span></h2>
                    </div>
                    <div className="block">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-6.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-1.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-2.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-3.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-4.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/cross-5.svg" alt="techImg" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
}

export default CrossPlatform