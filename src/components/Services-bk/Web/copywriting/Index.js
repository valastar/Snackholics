import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import CopywritingBanner from '../../../CustomBanner/CustomBanner'
import BestCopywriters from '../website-maintenance/MaintenanceServices/MaintenanceServices'
import CopywritingProject from './CopywritingProject/CopywritingProject'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import CopyWritingList from "../../../CustomFeatures/CopyWritingList.json"
import CustomFeatures from '../../../CustomFeatures/CustomFeatures'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <CopywritingBanner classProps="copywritingBanner" title="Copywriting services that work" description={["Spelling and grammar count, but they’re just the beginning." , <br/>  , " Your message needs to be clear and your words need to touch your audience."]} breadCrumbLink="/services/web/copywriting" breadCrumbName="Copywriting" />
      <BestCopywriters title={["Wish to hire the best copywriters in ",<span>your town?</span>]} 
      description="Vision, Skill and Process to craft the ideal copy for YOU."
      sideDetails="Quick Growth Consulting has offered copywriting services to clients in Toronto, Canada and others all over the globe. Our ability to understand your target markets and buyer persona makes us write content that actually converts. We write using the most recognized content writing and copywriting frameworks to give a reading experience that demonstrates expertise and authenticity."
      posterImg="/images/services/copywriteVideo.svg" videoLink="https://www.w3schools.com/html/mov_bbb.mp4"/>
      <CustomFeatures classProps="copyWritingServices" title={["Copy Writing ",<span>Services</span>]} dataList={CopyWritingList}/>
      <CopywritingProject />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
