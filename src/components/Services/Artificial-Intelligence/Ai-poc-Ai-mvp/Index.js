import React from 'react'
import Header from '../../../Header/Header'
import AiPocMvpBanner from '../../../CustomBanner/CustomBanner'
import AiSuccess from './AiSuccess/AiSuccess'
import ProjectSuccees from '../../../CustomFeatures/CustomFeatures'
import AiRoadMap from './AiRoadMap/AiRoadMap'
import BussinessExpansion from '../../../Portfolio/MakeDifferent/MakeDifferent'
import WebRecent from '../../Software/WebApplications/WebRecentWork/WebRecentWork'
import Faq from '../../../Portfolio/Faqs/Faqs'
import Footer from '../../../Footer/Footer'
import ProjectSucceesList from '../../../CustomFeatures/AiProjectSuccessList.json'
import BussinessExpansionList from '../../../Portfolio/MakeDifferent/BussinessExpansionList.json'
function Index() {
  return (
    <React.Fragment>
        <Header />
        <AiPocMvpBanner classProps="AiPocMvpBanner" title="AI PoC & MVP" description="Turn visionary AI concepts into real-world solutions with confidence, backed by strategic insights and expertise." breadCrumbLink="/services/artificial-intelligence/ai-poc-ai-mvp" breadCrumbName="AI PoC & MVP"/>
        <AiSuccess />
        <ProjectSuccees classProps="seoServices" title={["How AI (PoC) and (MVP) Development Can ", <span>Accelerate Your Project’s Success.</span>]}  dataList={ProjectSucceesList} />
        <AiRoadMap />
        <BussinessExpansion classProps="BussinessExpansion" title={["AI PoC and MVP Strategies to Drive  ", <br /> ,<span>Business Expansion</span>]} dataList={BussinessExpansionList}/>
        <WebRecent head2="Success Stories" spanText="In Spotlight" />
        <Faq />
        <Footer />
    </React.Fragment>
  )
}

export default Index