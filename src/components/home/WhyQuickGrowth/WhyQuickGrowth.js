import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
// import OurServices from './OurServices/OurServices'
import WhyQuickGrowthSection from './WhyQuickGrowthSection'
import WhyQuickGrowthpage from "./WhyQuickGrowthPage"

function WhyQuickGrowth() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      {/* <WhyQuickGrowthSection /> */}
      <div className="container mx-auto px-4">

     <WhyQuickGrowthpage />

      </div>
      {/* <OurServices /> */}
      <div className="container mx-auto px-4">

      </div>
      <Footer/>
    </div>
  )
}

export default WhyQuickGrowth