import React, { useEffect } from 'react'
import './ChooseUs.scss'
import AOS from 'aos';

function ChooseUs() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="chooseUs">
            <div className="container">
            <div className="content">
                    <div className="row">
                        <div className="col-md-5" data-aos="fade-right" data-aos-duration="1000">
                           <img src="/images/services/choose.svg" alt="choose" />
                        </div>
                        <div className="col-md-7" data-aos="fade-left" data-aos-duration="1000">
                            <h2>8 Reasons to Choose Us for Your Canada <span>Ecommerce Website
                            Development</span></h2>
                            <p>Since our establishment in 2017, we’ve been deeply entrenched in the eCommerce web industry. Our journey began with pioneering the first baby goods website in eCommerce, which, within two years of its launch, secured multiple number one positions in Google and achieved remarkable turnover.</p>
                        </div>
                    </div>
            </div>
            <div className="chooseList">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>We Develop Ecommerce Solutions for your Customers</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>Ecommerce Built to Last</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>Ecommerce Solutions Tailored to your Needs</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>Our Scale Means We Can Move Fast</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>We Know Our Stuff</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>Long Term Partnership</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>Partners in Your Success</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mt-3 px-2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/chooseCheck.svg" alt="chooseCheck" />
                            <p>We’re Active in the Ecommerce Eco System</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ChooseUs
