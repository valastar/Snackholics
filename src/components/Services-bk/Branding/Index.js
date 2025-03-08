import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import BrandingBanner from '../../CustomBanner/CustomBanner'
import CreativeBranding from './CreativeBranding/CreativeBranding'
import BrandingIdentity from './BrandingIdentity/BrandingIdentity'
import BrandingServices from './BrandingServices/BrandingServices'
import AwesomeProject from './AwesomeProject/AwesomeProject'
import BrandingStaff from './BrandingStaff/BrandingStaff'
import Faqs from '../../Portfolio/Faqs/Faqs'
import BrandingWorks from './BrandingWorks/BrandingWorks'
import BrandingServicesList from './BrandingServices/BrandingServicesList.json'
function Index() {
  return (
    <React.Fragment>
      <Header />
      <BrandingBanner classProps="brandingBanner" title="Branding Agency" 
      description="Spelling and grammar count, but they’re just the beginning. Your message needs to be clear and your words need to touch your audience."
      breadCrumbLink="/services/branding" breadCrumbName="Branding"/>
      <CreativeBranding />
      <BrandingIdentity />
      <BrandingServices title="Services" description="Transform your business with our impact" dataList={BrandingServicesList} />
      <AwesomeProject />
      <BrandingWorks />
      <BrandingStaff />
      <Faqs />
      <Footer />
    </React.Fragment>
  )
}

export default Index
