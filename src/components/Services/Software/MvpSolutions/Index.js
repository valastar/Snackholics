import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import MvpSolutions from '../../../CustomBanner/CustomBanner'
import ProductDev from '../../../CustomExpertTalk/CustomExpertTalk'
import MvpServices from '../../Branding/BrandingServices/BrandingServices'
import MvpBenefits from '../SaasSolutions/SaasIndustries/SaasIndustries'
import TechStackMVP from '../MobileApplications/TechStack/TechStack'
import MvpRecentWork from '../../Web/ecommerce-development/EcommerceWork/EcommerceWork'
import MvpDevProcess from '../../Web/website-design-development/WebsiteProcess/WebsiteProcess'
import MvpServicesList from '../../Branding/BrandingServices/MvpServicesList.json'
import MvpBenefitsList from '../SaasSolutions/SaasIndustries/mvpBenefitsList.json'
import EcommerceWorkList from '../../Web/ecommerce-development/EcommerceWork/EcommerceWorkList.json'
import WebsiteProcessList from '../../Web/website-design-development/WebsiteProcess/WebsiteProcessList.json'
import MvpTechStackList from '../MobileApplications/TechStack/MvpTechStackList.json'
const Index = () => {
  return (
    <React.Fragment>
        <Header />
        <MvpSolutions classProps="MvpSolutions" title="MVP Solution" 
      description="Quick Growth is here to assist you with MVP creation and development for your startup, turning your idea into reality and showcasing it to investors in Canada."
      breadCrumbLink="/services/software/mvp-solution" breadCrumbName="MVP Solutions"/>
        <ProductDev title={["Minimum Viable Product " ,  <span> Development</span>]} description="A minimum viable product (MVP) is the first shippable version of your software, featuring only the essential functionalities needed to resonate with your target audience in Canada. The primary goal of MVP development is to gather valuable feedback from users and start generating returns early in the process. Once the MVP is launched, it can be gradually enhanced with new features until it evolves into a fully developed application."/>
        <Achievements />
        <MvpServices  title={["Tailored MVP Software Development ", <span>Services</span>]}  dataList={MvpServicesList}/>
        <MvpBenefits classProps="mvpbenefits" title={["Key Benefits of MVP " , <span>Development</span> ]}  dataList={MvpBenefitsList}/>
        <TechStackMVP title={["Technologies That We Have Mastered for MVP  ", <span>Software Development</span>]} dataList={MvpTechStackList}/>
        <MvpRecentWork classProps="MvpRecentWork" title={["Our  Recent ", <span> Work</span>]}  dataList={EcommerceWorkList} />
        <MvpDevProcess  classProps="MvpDevProcess" title={["Our MVP Development ",<span>Process</span>]} dataList={WebsiteProcessList}/>
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index