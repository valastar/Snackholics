import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SaasSolBanner from '../../../CustomBanner/CustomBanner'
import SaasPlatform from '../../../CustomExpertTalk/CustomExpertTalk'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import SaasDevServices from '../../../CustomFeatures/CustomFeatures'
import SaasIndustries from './SaasIndustries/SaasIndustries'
import TechStack from '../MobileApplications/TechStack/TechStack'
import SaasBenefits from '../../../CustomFeatures/CustomFeatures'
import SaasRecent from '../MobileApplications/AppRecentProjects/AppRecentProjects'
import SaasDevProcess from './SaasDevProcess/SaasDevProcess'
import Faq from '../../../Portfolio/Faqs/Faqs'
import SaasDevServicesList from '../../../CustomFeatures/SaasDevServicesList.json'
import SaasBenefitsList from '../../../CustomFeatures/SaasBenefitsList.json'
import SaasIndustriesList from './SaasIndustries/SaasIndustriesList.json'
import AppRecentProjectsList from '../MobileApplications/AppRecentProjects/RecentProjectsList.json'
import SaasTechStackList from '../MobileApplications/TechStack/TechStackList.json'
const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <SaasSolBanner classProps="SaasSolBanner" title="SaaS Solution" 
      description="Our SaaS development company leverages cutting-edge software development practices to build secure, cloud-based products tailored to the Canadian."
      breadCrumbLink="/services/software/saas-solution" breadCrumbName="SaaS Solution"/>
        <SaasPlatform title={["SaaS Platform" ,  <span> Development</span>]} description="Leverage the power of Software as a Service to elevate your business in Canada. Our comprehensive SaaS development services deliver tailored solutions designed to optimize user engagement, streamline workflows, and drive growth. With our expert team, we ensure your business stays agile and competitive using cutting-edge SaaS technologies customized to meet your unique needs and goals in the Canadian market."/>
        <Achievements />
        <SaasDevServices classProps="seoServices" title={["Our SaaS Development  " ,<span>Services</span>]}  dataList={SaasDevServicesList}/>
        <SaasIndustries title={["Industries " , <span>We Serve</span> ]} dataList={SaasIndustriesList}/>
        <TechStack title={["Technology Stack We Use for ", <br/> ,<span>SaaS Solution Development</span>]} dataList={SaasTechStackList} />
        <SaasBenefits classProps="SaasBenefits" title={["Core Benefits of Developing SaaS  " ,<span>Applications</span>]}  dataList={SaasBenefitsList}/>
        <SaasRecent classProps="SaasRecent" dataList={AppRecentProjectsList}/>
        <SaasDevProcess />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index