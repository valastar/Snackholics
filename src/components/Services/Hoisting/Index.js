import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import HoistingBanner from '../../CustomBanner/CustomBanner'
import HostingDomain from './HostingDomain/HostingDomain'
import HoistingServices from '../../CustomFeatures/CustomFeatures'
import HostingWorks from './HostingWorks/HostingWorks'
import HostingMind from './HostingMind/HostingMind'
import Faqs from '../../Portfolio/Faqs/Faqs'
import HoistingServicesList from '../../CustomFeatures/HostingServicesList.json'

function Index() {
  return (
    <React.Fragment>
      <Header />
      <HoistingBanner classProps="hoistingBanner" title="Hosting" 
      description="Create the website you envision with reliable, scalable, and free web hosting to establish your online presence in Canada."
      breadCrumbLink="/services/hosting" breadCrumbName="Hosting"/>
      <HostingDomain />
      <HoistingServices classProps="hostingServices" title={["What Service ", <span>We Offer</span>]}  dataList={HoistingServicesList} />
      <HostingWorks />
      <HostingMind />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
