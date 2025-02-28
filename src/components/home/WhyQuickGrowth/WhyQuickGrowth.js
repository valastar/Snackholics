import React, { useEffect } from 'react'
import './WhyQuickGrowth.scss'
import AOS from 'aos';

function WhyQuickGrowth() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="whyQuickGrowth">
            <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Why <span>Quick Growth</span></h2>
                    </div>
                    <div className="quickWrapper">
                    <div className="row align-items-center">
                       <div className="col-md-5 firstBlock" >
                       <div className="block" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/images/home/why1.svg" alt="whyImg" />
                            <div>
                            <h5>Expertise and Experience</h5>
                            <p>A Proven track record with reliable & Innovation solutions.</p>
                            </div>
                        </div>
                        <div className="block" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/images/home/why2.svg" alt="whyImg" />
                            <div>
                            <h5>Client-Centric Approach</h5>
                            <p>We align our solutions with your business Demands</p>
                            </div>
                            </div>
                        <div className="block" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/images/home/why3.svg" alt="whyImg" />
                            <div>
                            <h5>End-to-End Services</h5>
                            <p>From concept to support, we've got you covered.</p>
                            </div>
                            </div>
                            <div className="block" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/images/home/why4.svg" alt="whyImg" />
                            <div>
                            <h5>Commitment to Quality</h5>
                            <p>Experience the perfect balance of quality and affordability.</p>
                            </div>
                            </div>
                       </div>
                       <div className="col-md-2" data-aos="fade-up" data-aos-duration="1000">
                        <img className='hands' src="/images/home/hands.svg" alt="hands" />
                       </div>
                       <div className="col-md-5" >
                       <div className="block" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/home/why5.svg" alt="whyImg" />
                            <div>
                            <h5>Expertise and Experience</h5>
                            <p>A Proven track record with reliable & Innovation solutions.</p>
                            </div>
                        </div>
                        <div className="block" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/home/why6.svg" alt="whyImg" />
                            <div>
                            <h5>Client-Centric Approach</h5>
                            <p>We align our solutions with your business Demands</p>
                            </div>
                            </div>
                        <div className="block" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/home/why7.svg" alt="whyImg" />
                            <div>
                            <h5>End-to-End Services</h5>
                            <p>From concept to support, we've got you covered.</p>
                            </div>
                            </div>
                            <div className="block" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/home/why8.svg" alt="whyImg" />
                            <div>
                            <h5>Commitment to Quality</h5>
                            <p>Experience the perfect balance of quality and affordability.</p>
                            </div>
                            </div>
                       </div>
                    </div>
                    </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default WhyQuickGrowth
