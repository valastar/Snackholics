import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import EcommerceBanner from './EcommerceBanner/EcommerceBanner'
import AboutEcommerce from '../../../CustomExpertTalk/CustomExpertTalk'
import RetailReach from './RetailReach/RetailReach'
import ChooseUs from './ChooseUs/ChooseUs'
import EcommerceDevices from './EcommerceDevices/EcommerceDevices'
import Schedule from './Schedule/Schedule'
import EcommercePlatforms from './EcommercePlatforms/EcommercePlatforms'
import EcommerceWork from './EcommerceWork/EcommerceWork'
import RequestQuote from '../../../home/RequestQuote/RequestQuote'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import EcommerceFeaturesList from './EcommerceFeatures/ecommerceFeaturesList.json'
import EcomFeatures from './EcommerceFeatures/EcommerceFeatures'
import EcommerceWorkList from './EcommerceWork/EcommerceWorkList.json'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <EcommerceBanner />
      <AboutEcommerce title={["Responsive, Tailored, and Scalable eCommerce" ,  <span> Website Design Services</span>]} subHeading="Work With Quick Growth Leading eCommerce Development Agency" description="A successful eCommerce website design in Calgary needs to offer top-notch user experience, has all the features for users to easily navigate and find the product features that will aid the user’s decision to purchase. However, an online store with slow speed, confusing user interface, or missing crucial features will result in lost sales. So, whether you are building a brand-new online store or looking to make changes or upgrades, our team has a solution that can fulfill your business needs."/>
      <RetailReach />
      <EcomFeatures title={["Key Features of ecommerce ",<span>Websites</span>]} description={["Inevitably in any growth market, the competition is heightening. " , <br /> , " Today your digital Ecomers expect slick user experiences that just work. "]} dataList={EcommerceFeaturesList} />
      <ChooseUs />
      <EcommerceDevices />
      <Schedule />
      <EcommercePlatforms />
      <EcommerceWork title={["Explore Our Most Recent ", <span>Ecommerce Work</span>]} description="All of our eCommerce websites are created in-house, by our software engineers. Take a look at our portfolio below where you’ll find examples of work completed for many industries." dataList={EcommerceWorkList} />
      <RequestQuote />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
