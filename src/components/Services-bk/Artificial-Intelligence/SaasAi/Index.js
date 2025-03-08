import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SaasAiBanner from '../../../CustomBanner/CustomBanner'
import SaasSolutions from '../../../CustomExpertTalk/CustomExpertTalk'
import SaasImportance from '../../../CustomFeatures/CustomFeatures'
import CaseStudy from '../AI-Chatbots/CaseStudies/CaseStudies'
import WebMaintenanceProcess from '../../../home/OurProcess/OurProcess'
import Faq from '../../../Portfolio/Faqs/Faqs'
import SaasAiImportanceList from '../../../CustomFeatures/SaasAiImportanceList.json'
import OurProcessList from '../../../home/OurProcessList.json'
function Index() {
  return (
    <React.Fragment>
        <Header />
        <SaasAiBanner classProps="SaasAiBanner" title="SaaS AI Solution" description="Our AI SaaS services provide practical solutions to real-world challenges, offering a one-stop platform for all your AI development needs in Canada." breadCrumbLink="/services/artificial-intelligence/saas-ai-solution" breadCrumbName="SaaS AI Solution"/>
        <SaasSolutions title={["AI-Powered SaaS for Smarter " ,  <span> Solutions</span>]} description="Our AI-powered SaaS solutions equip businesses with intelligent tools that streamline complex processes and boost efficiency. Whether you aim to enhance customer engagement or optimize operations, our platform delivers practical, reliable AI capabilities customized to meet your unique needs."/>
        <SaasImportance classProps="SmmPlatforms" title={["Key Examples and Importance of AI-Powered SaaS in " ,<span>across Industries</span>]}  dataList={SaasAiImportanceList} />
        <CaseStudy classProps="bg-dark"/>
        <WebMaintenanceProcess title={["Our Website Maintenance ", <br/> , <span>Process</span>]} classProps="WebMaintenanceProcess" dataList={OurProcessList}/>
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index