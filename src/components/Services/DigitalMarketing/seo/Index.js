import React from 'react'
import Header from '../../../Header/Header'
import Footer from '../../../Footer/Footer'
import SeoBanner from '../../../CustomBanner/CustomBanner'
import QuickFacts from '../../../CustomExpertTalk/CustomExpertTalk'
import Achievements from '../../../AboutUs/Achievements/Achievements'
import SeoServices from './SeoServices/SeoServices'
import Benefits from '../../../CustomFeatures/CustomFeatures'
import RecentWorks from '../../Web/ecommerce-development/EcommerceWork/EcommerceWork'
import Platform from './platforms/Platforms'
import WhyChoose from './why-quick-growth/WhyChoose'
import FAQ from '../../../Portfolio/Faqs/Faqs'
import SeoBenefitsList from '../../../CustomFeatures/SeoBenefitsList.json'
import EcommerceWorkList from '../../Web/ecommerce-development/EcommerceWork/EcommerceWorkList.json'
import PlatformsList from './platforms/PlatformsList.json'

const Index = () => {
  return (
    <React.Fragment>

      <Header />
      <SeoBanner classProps="SeoBanner" title="Search Engine Optimization"
        description="Search Engine Optimization (SEO) is the practice of optimizing websites and content to improve their visibility in search engine results, driving organic traffic and enhancing online presence."
        breadCrumbLink="/services/digital-marketing/seo" breadCrumbName="Search Engine Optimization" />
      <QuickFacts title={["How Strategic Search Engine Marketing", <br />, <span>Can Boost Your Revenue</span>]} description="Simply put, our SEM services help you dominate search results, connect with your Canadian audience, and boost your bottom line. We believe in delivering measurable results and are passionate about helping businesses across Canada grow through optimized SEM campaigns that elevate your brand to the top of both organic and paid search results. On average, our clients see a significant return on their investment. With our advanced marketing technology, we continuously enhance your results by driving actionable insights, ensuring full-funnel attribution, and delivering high-quality conversions." />
      <Achievements />
      <SeoServices />
      <Benefits classProps="copywritingServices" title={["Key Benefits of  ", <span>Search Engine Marketing</span>]} dataList={SeoBenefitsList} />
      <RecentWorks classProps="seoWork" title={["Our  Recent ", <span> Work</span>]} description={["All our SEO solutions are developed in-house by our skilled software engineers.",
        <br />,
        "Check out our portfolio below to see examples of our work across various industries"]} dataList={EcommerceWorkList} />
      <Platform classProps="seo-platforms" title={["Search Engine Marketing ", <span>Platforms</span>]} dataList={PlatformsList}/>
      <WhyChoose />
      <FAQ />
      <Footer />

    </React.Fragment>
  )
}

export default Index