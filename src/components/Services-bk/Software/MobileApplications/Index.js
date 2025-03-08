import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import MobileAppBanner from '../../../CustomBanner/CustomBanner'
import LeadingCompany from './LeadingCompany/LeadingCompany'
import QuickFacts from '../../../AboutUs/Achievements/Achievements'
import MobileServices from '../../DigitalMarketing/seo/platforms/Platforms'
import BusinessSolutions from './BusinessSolutions/BusinessSolutions'
import TechStack from './TechStack/TechStack'
import AppRecentProjects from './AppRecentProjects/AppRecentProjects'
import Faq from '../../../Portfolio/Faqs/Faqs'
import AppRecentProjectsList from './AppRecentProjects/RecentProjectsList.json'
import MobileServicesList from '../../DigitalMarketing/seo/platforms/MobileServicesList.json'
import TechStackList from './TechStack/TechStackList.json';

const MobileApplications = () => {
  return (
    <React.Fragment>
      <Header />
      <MobileAppBanner classProps="MobileAppBanner" title="Mobile App Development" description="Enhance your online presence and credibility with our dynamic application development solutions that scale."
       breadCrumbLink="/services/software/mobile-applications" breadCrumbName="Mobile App Development"/>
      <LeadingCompany />
      <QuickFacts />
      <MobileServices classProps="MobileServices" title={["Mobile App Development  ", <span>Services</span>]} dataList={MobileServicesList}/>
      <BusinessSolutions />
      <TechStack title={["Technology Stack We Use for ",<br/>, <span>Mobile Application Development</span>]} dataList={TechStackList}/>
      <AppRecentProjects classProps="AppRecentProjects" dataList={AppRecentProjectsList}/>
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default MobileApplications