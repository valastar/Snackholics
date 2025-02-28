import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SmmBanner from '../../../CustomBanner/CustomBanner'
import SmmBasics from '../../../CustomExpertTalk/CustomExpertTalk'
import SmmBenefits from '../../../CustomFeatures/CustomFeatures'
import SmmWcu from '../../../CustomFeatures/CustomFeatures'
import SmmPlatforms from '../../../CustomFeatures/CustomFeatures'
import HowToMarket from './How-to-Market/HowToMarket'
import LatestProjects from '../../../Portfolio/LatestProject/LatestProject'
import FAQ from '../../../Portfolio/Faqs/Faqs'
import SmmBenefitsList from '../../../CustomFeatures/SmmBenefitsList.json'
import SmmWcuList from '../../../CustomFeatures/SmmWcuList.json'
import SmmPlatformsList from '../../../CustomFeatures/SmmPlatformsList.json'
const Index = () => {
  return (
    <React.Fragment>
      <Header />
      <SmmBanner classProps="SmmBanner" title="Social Media Marketing"
        description="Many in Canada mistakenly equate social media marketing with digital marketing, though digital marketing encompasses much more."
        breadCrumbLink="/services/digital-marketing/smm" breadCrumbName="Social Media Marketing" />
      <SmmBasics title={["Social Media Marketing "  , <span>Basics</span>]} description="Social media is a vital source of news and information in today's digital world, playing a key role in search rankings and digital marketing. With 4.57 billion users globally, including 346 million who joined in 2020, its reach is immense. Users spend an average of two hours and 24 minutes daily across multiple platforms, highlighting the importance of maintaining a strong social media presence."/>
      <SmmBenefits classProps="seoServices" title={["What Are the Benefits of Social Media  ", <span>Marketing Services</span>]} dataList={SmmBenefitsList} />
      <SmmWcu classProps="copywritingServices" title={["Why Choose Quick Growth for Your Social  ", <span>Media Marketing</span>]} dataList={SmmWcuList} />
      <HowToMarket />
      <LatestProjects />
      <SmmPlatforms classProps="SmmPlatforms" title={["Social Media Marketing  ", <span>Platforms</span>]} dataList={SmmPlatformsList} />
      <FAQ />
      <Footer />
    </React.Fragment>
  )
}

export default Index