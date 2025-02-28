import React, { useEffect } from 'react'
import './BusinessSolutions.scss'
import AOS from 'aos';

const BusinessSolutions = () => {
    useEffect(() => {
        AOS.init();
      }, [])
      return (
        <React.Fragment>
            <div className="custom-solutions">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Customized Business <span>Solutions</span></h2>
                    </div>
                    <div className="block">
                        <ul>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-1.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-2.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-3.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-4.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-5.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-6.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-7.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-8.svg" alt="techImg" /></li>
                            <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/services/custom-sol-9.svg" alt="techImg" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
      )
}

export default BusinessSolutions