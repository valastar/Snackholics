import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebAppBanner from '../../../CustomBanner/CustomBanner'
import WebDevelopment from '../../../CustomExpertTalk/CustomExpertTalk'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import CreateWebApps from '../../../CustomFeatures/CustomFeatures'
import ToolsTech from '../MobileApplications/TechStack/TechStack'
import WebProcesses from './WebProcesses/WebProcesses'
import WebRecentWork from './WebRecentWork/WebRecentWork'
import Faq from '../../../Portfolio/Faqs/Faqs'
import CreateWebAppsList from '../../../CustomFeatures/WebAppsCreateList.json'
import ToolsTechStackList from '../MobileApplications/TechStack/ToolsTechStackList.json'

const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <WebAppBanner classProps="WebAppBanner" title="Web App Development" 
      description="Boost your online presence and credibility with our dynamic, scalable web application development solutions tailored for Canadian businesses."
      breadCrumbLink="/services/software/web-applications" breadCrumbName="Web App Development"/>
      <WebDevelopment title={["Web Application" ,  <span> Development</span>]} description="Bring your web design ideas to life with our innovative solutions powered by the latest technologies. We create custom web applications tailored to lead generation and value creation, ensuring a high return on investment. Understanding the impact of a user-friendly, fully functional web app—and the damage an underperforming one can cause—we help Canadian businesses overcome technical challenges and build top-tier web solutions aligned with their marketing goals." />
      <Achievements />
      <CreateWebApps classProps="CreateWebApps" title={["Web Applications ", <span>We Create</span>]}  dataList={CreateWebAppsList}/>
      <ToolsTech title={["Tools & " ,<span>Technologies</span>]} dataList={ToolsTechStackList} />
      <WebProcesses />
      <WebRecentWork head2="Our Recent" spanText="Work" />
      <Faq />
      <Footer />
    </React.Fragment>
  )
}

export default Index