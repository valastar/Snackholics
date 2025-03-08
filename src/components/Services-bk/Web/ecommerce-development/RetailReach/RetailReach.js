import React, { useEffect } from 'react'
import './RetailReach.scss'
import AOS from 'aos';

function RetailReach() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="retailReach">
            <div className="container">
                <img data-aos="fade-up" data-aos-duration="1000" className='banner' src="/images/services/RetailReach.svg" alt="RetailReach" />
                <div className="content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12" data-aos="fade-right" data-aos-duration="1000">
                            <h2>Expand Your Retail <span>Reach at Scale</span></h2>
                            <p>In today’s digital landscape, it’s essential for retailers to establish a strong online presence to effectively reach and convert their target audiences into digital buyers. Whether you’re enhancing an existing eCommerce business in Canada or launching a new one, we’re here to help you maximize your digital advantage.</p>
                            <p>The significance of eCommerce in retail operations is undeniable, with its continuous growth trajectory. By 2021, online purchases are projected to contribute to 17.5% of global retail sales, amounting to an impressive $4.9 trillion in revenue.</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5 col-md-12" data-aos="fade-left" data-aos-duration="1000">
                            <ul>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Plan an eCommerce strategy for success</li>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Design and develop a best in class eCommerce website</li>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Partner and support you throughout the journey</li>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Help you hit your revenue and profit targets achieving ROI</li>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Reach, appeal and convert your target audience into loyal customers</li>
                                <li><img src="/images/services/RetailCheck.svg" alt="check" /> Launch a robust and feature-rich eCommerce platform you can scale</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default RetailReach
