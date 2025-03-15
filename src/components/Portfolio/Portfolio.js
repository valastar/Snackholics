import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PortfolioBanner from './PortfolioBanner/PortfolioBanner'
import MakeDifferent from './MakeDifferent/MakeDifferent'
import Achievements from '../AboutUs/Achievements/Achievements'
import LatestProject from './LatestProject/LatestProject'
import ChooseUs from './ChooseUs/ChooseUs'
import Faqs from './Faqs/Faqs'
import WorkWithUs from './WorkWithUs/WorkWithUs'
import Technologies from './Technologies/Technologies'
import MakeDifferenceList from './MakeDifferent/MakeDifferenceList.json'

function Portfolio() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <PortfolioBanner />
      <div className="container mx-auto px-4">
        <MakeDifferent 
          classProps="makeDifferent" 
          title={["What Makes us ", <span className="text-yellow-500">Different</span>]} 
          dataList={MakeDifferenceList} 
        />
        <Achievements />
      </div>
      <LatestProject />
      <ChooseUs />
      <Technologies />
      <div className="container mx-auto px-4">
        <Faqs />
        <WorkWithUs />
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio