import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import './SeoServices.scss'

const SeoServices = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "imageSrc": "/images/services/seo-1.svg",
            "title": "PPC Management",
          "description": "PPC management isn't something you can just set and forget. It demands careful research, planning, execution, and monitoring to create engaging PPC ad copy and continuously optimize campaigns for success in the Canadian market."
        },
        {
          "imageSrc": "/images/services/seo-2.svg",
            "title": "Search Engine Optimization (SEO)",
          "description": "SEO services involve continuously monitoring your website and implementing necessary changes to enhance your organic ranking in the Canadian market. This includes improving site speed and crawlability, conducting keyword research, and enhancing the quality of your content to better align with common search queries relevant to Canadian audiences."
        },
        {
          "imageSrc": "/images/services/seo-3.svg",
            "title": "Content Marketing",
          "description": "Effective content marketing positions you as a thought leader in your industry while educating your Canadian audience and building brand trust. It’s a crucial part of any robust SEO strategy. We know how to create content that ranks well in the Canadian market."
        },
        {
          "imageSrc": "/images/services/seo-4.svg",
            "title": "Conversion Rate Optimization",
          "description": "An effective SEM strategy analyzes data from every stage of the buying cycle to boost your conversion rate in the Canadian market. We utilize tools such as heatmapping, scroll tracking, user session recording, funnel analysis, A/B testing, and more to optimize your campaigns."
        },
        {
          "imageSrc": "/images/services/seo-5.svg",
            "title": "Paid Social Media Marketing",
          "description": "By incorporating targeted paid social campaigns into their SEM strategy, Canadian companies can enhance their online presence, gain deeper insights into customer behavior, drive more high-quality traffic to their websites, and expand their reach within their industry."
        }
      ]
      
    return (
        <React.Fragment>
            <div className="seoServices">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>What Do SEM  <span>Services Include</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">

                            {slideData.map((item, index) => (
                                <div className={index < 2 ? "col-md-6" : "col-md-4"} key={index}>
                                    <div className="seoServices__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SeoServices