import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebDesignBanner from './WebDesignBanner/WebDesignBanner'
import AboutWebsiteDevelopment from '../../../CustomExpertTalk/CustomExpertTalk'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import DesignedAndDeveloped from './DesignedAndDeveloped/DesignedAndDeveloped'
import WebsiteProcess from './WebsiteProcess/WebsiteProcess'
import WhyQuickGrowth from '../../../home/WhyQuickGrowth/WhyQuickGrowth'
import ClientSays from '../../../home/ClientSays/ClientSays'
import Technologies from '../../../Portfolio/Technologies/Technologies'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import PainPoints from './PainPoints/PainPoints'
import BeforeAfter from './BeforeAfter/BeforeAfter'
import WebsiteProcessList from './WebsiteProcess/WebsiteProcessList.json'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <WebDesignBanner />
      <AboutWebsiteDevelopment title={["Website Design &" ,  <span> Development</span>]} description="Quick Growth Marketing is a Calgary website design company that specializes in custom website design and development, offering services across Canada. Our ability to understand your business model, target market and processes is what takes our clients’ websites from Internet placeholders to dynamic, fully functional marketing forces. We create intuitive, beautifully functional, custom web site designs that will effectively communicate your marketing message to your customer base. Our processes have been tried and tested over a span of 25+ years." />
      <Achievements />
      <DesignedAndDeveloped />
      <PainPoints />
      <WebsiteProcess classProps="websiteProcess" title={["Website Development ",<span>Process</span>]} dataList={WebsiteProcessList}/>
      <BeforeAfter />
      <div className="noBg">
      <WhyQuickGrowth />
      </div>
      <ClientSays/>
      <Technologies/>
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
