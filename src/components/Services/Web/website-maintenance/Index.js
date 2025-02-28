import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import WebsiteMaintenanceBanner from '../../../CustomBanner/CustomBanner'
import MaintenanceServices from './MaintenanceServices/MaintenanceServices'
import NeedMaintenance from './NeedMaintenance/NeedMaintenance'
import CustomFeatures from '../../../CustomFeatures/CustomFeatures'
import MaintenancePackages from './MaintenancePackages/MaintenancePackages'
import MaintenanceProcess from '../../../CustomFeatures/CustomFeatures'
import WhyQuickGrowth from '../../../home/WhyQuickGrowth/WhyQuickGrowth'
import Faqs from '../../../Portfolio/Faqs/Faqs'
import EcommerceDevelopmentFeaturesList from '../../../CustomFeatures/EcommerceDevelopmentFeaturesList.json'
import WebMaintenanceProcessList from '../../../CustomFeatures/WebMaintenanceProcessList.json'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <WebsiteMaintenanceBanner classProps="webMaintenanceBanner" title="Website Maintenance" description="Website maintenance involves regular updates, security checks, and performance optimizations to keep a site running smoothly and securely." breadCrumbLink="/services/web/website-maintenance" breadCrumbName="Website Maintenance"/>
      <MaintenanceServices title={["Website ",<span>Maintenance Services</span>]} 
      description="Professional & Affordable Website Maintenance Services"
      sideDetails="Whether your website runs on WordPress or any other CMS, we keep you worry-free with regular content, security and website software updates, and backups. Secure peace of mind with our website maintenance services in Canada"
      posterImg="/images/services/maintaienceVideo.svg" videoLink="https://www.w3schools.com/html/mov_bbb.mp4"/>
      <NeedMaintenance />
      <CustomFeatures title={["Ecommerce Website Development ", <span>Features</span>]} description={["Inevitably in any growth market, the competition is heightening. ", <br /> ," Today your digital customers expect slick user experiences that just work."]} dataList={EcommerceDevelopmentFeaturesList} />
      <MaintenancePackages />
      <MaintenanceProcess classProps="maintenanceProcess" title={["Our Website Maintenance ", <br /> ,<span>Process</span>]}  dataList={WebMaintenanceProcessList}/>
      <WhyQuickGrowth />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
