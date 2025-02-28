import React, { useEffect } from 'react'
import './Technologies.scss'
import AOS from 'aos';

function Technologies() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="technologies">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Technologies</h2>
                </div>
                <div className="block">
                    <ul>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech1.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech2.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech3.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech4.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech5.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech6.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech7.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech8.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech9.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech10.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech11.svg" alt="techImg" /></li>
                        <li data-aos="fade-up" data-aos-duration="1000"><img src="/images/portfolio/tech12.svg" alt="techImg" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Technologies
