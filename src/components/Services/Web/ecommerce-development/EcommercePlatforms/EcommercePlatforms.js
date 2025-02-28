import React, { useEffect } from 'react'
import './EcommercePlatforms.scss'
import AOS from 'aos';

function EcommercePlatforms() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="ecommercePlatforms">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>E-Commerce <span>Platforms</span></h2>
                    <p>We work with a range of leading eCommerce platforms in the market. If you’re unsure which might be the right fit for your website, no problem, our eCommerce experts can recommend the best fit of technology and features to get you moving fast.</p>
                </div>
                <div className="cards">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 mb-4" data-aos="fade-right" data-aos-duration="1000">
                            <div className="mainImg">
                                <img src="/images/services/platforms.svg" alt="platforms" />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 mb-4" data-aos="fade-left" data-aos-duration="1000">
                            <div className="block">
                                <ul>
                                    <li><img src="/images/services/RetailCheck.svg" alt="RetailCheck" /> <p>Magento</p></li>
                                    <li><img src="/images/services/RetailCheck.svg" alt="RetailCheck" /> <p>Shopify</p></li>
                                    <li><img src="/images/services/RetailCheck.svg" alt="RetailCheck" /> <p>WooCommerce</p></li>
                                    <li><img src="/images/services/RetailCheck.svg" alt="RetailCheck" /> <p>nopCommerce</p></li>
                                </ul>
                                <p>If your business is already online, looking for improvements or perhaps to move technologies, we’ve got expertise on tap working across.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-right" data-aos-duration="1000">
                            <div className="block">
                                <img src="/images/services/platform1.svg" alt="platformImg" />
                                <p>An award-winning open-source eCommerce platform that has revolutionized the world of eCommerce by cost-effectively providing a massive range of features previously the reserve of the largest online retailers.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-left" data-aos-duration="1000">
                            <div className="block">
                                <img src="/images/services/platform2.svg" alt="platformImg" />
                                <p>Since its inception, Shopify has been on a mission to make eCommerce accessible and easy to deploy for businesses of any size. Offering their feature-rich platform for a monthly subscription, Shopify makes it easy to get your store online and start those sales rolling in fast.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-right" data-aos-duration="1000">
                            <div className="block">
                                <img src="/images/services/platform3.svg" alt="platformImg" />
                                <p>WooCommerce provides an open-source and easily customisable platform that builds on WordPress, the world’s most popular content management platform. Fast and straightforward to set up, WooCommerce has plenty of features enabling you to grow your business.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-4" data-aos="fade-left" data-aos-duration="1000">
                            <div className="block">
                                <img src="/images/services/platform4.svg" alt="platformImg" />
                                <p>nopCommerce is the most popular eCommerce platform in the world built on Microsoft technologies. Also open-source, an active community supports the platform with plugins and extensions making it easy to grow your eCommerce business built on ASP.net.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EcommercePlatforms
