import React, { useEffect } from 'react'
import './WorkWithUs.scss'
import AOS from 'aos';

function WorkWithUs() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="workWithUs" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="block">
                    <img src="/images/portfolio/workWithUs.svg" alt="workWithUs" />
                    <div className="content">
                        <h3>Work With us</h3>
                        <p>We’re excited to delve deeper into
                        your project!</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default WorkWithUs
