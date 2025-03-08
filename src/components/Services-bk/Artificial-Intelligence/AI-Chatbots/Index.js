import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import ChatbotBanner from '../../../CustomBanner/CustomBanner'
import ChatbotDev from '../../../CustomExpertTalk/CustomExpertTalk'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import ChatbotBenefits from '../../../CustomFeatures/CustomFeatures'
import ChatbotServices from '../../../CustomFeatures/CustomFeatures'
import CrossPlatform from './CrossPlatform/CrossPlatform'
import ChatbotIntegration from '../../../CustomFeatures/CustomFeatures'
import AiToolsTech from './AiToolsTech/AiToolsTech'
import CaseStudies from './CaseStudies/CaseStudies'
import OurProcess from '../../../home/OurProcess/OurProcess'
import ChatbotBenefitsList from '../../../CustomFeatures/ChatbotBenefitsList.json'
import ChatbotServicesList from '../../../CustomFeatures/ChatbotServicesList.json'
import ChatbotIntegrationList from '../../../CustomFeatures/ChatbotIntegrationList.json'
import OurProcessList from '../../../home/OurProcessList.json'
function Index() {
  return (
    <React.Fragment>
        <Header />
        <ChatbotBanner classProps="ChatbotBanner" title="Custom Chatbot" 
        description="Build a custom Chatbot, embed it on your website and let it handle customer support, 
        lead generation, engage with your users, and more." 
        breadCrumbLink="/services/artificial-intelligence/ai-chatbots" breadCrumbName="Custom Chatbot" />
        <ChatbotDev title={["Customized AI Chatbot"  , <span> Development</span>]} 
        description="Have you ever thought, 'I wish we could respond to every customer within 30 seconds, 
        creating personalized, valuable interactions'? Are you tired of your customers receiving generic, 
        mediocre responses? Maybe your support team is overwhelmed by repetitive inquiries, leaving little 
        time to address more complex conversations. If you want to deliver exceptional customer experiences 
        and provide personalized, 24/7 support, this service is for you." />
        <Achievements />
        <ChatbotBenefits classProps="seoServices" 
        title={["How Does Quick Growth, a Leading AI Chatbot Company, ", <span>Benefit Your Business?</span>]} 
         dataList={ChatbotBenefitsList}/>
        <ChatbotServices classProps="copywritingServices" 
        title={["Tailored AI Chatbot Development Services Provided by ", <span>Quick Growth</span>]} 
         dataList={ChatbotServicesList}/>
        <CrossPlatform />
        <ChatbotIntegration classProps="ChatbotIntegration" 
        title={["Cross-Platform  ", <span>Chatbot Integration</span>]}  
        dataList={ChatbotIntegrationList}/>
        <AiToolsTech />
        <CaseStudies/>
        <OurProcess title="Our Process" description="Our company is guided by a foundation of four core principles" classProps="OurProcess" dataList={OurProcessList}/>
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index