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
    <React.Fragment>
        <Header />
        <PortfolioBanner />
        <MakeDifferent classProps="makeDifferent" title={["What Makes us ",<span>Different</span>]} dataList={MakeDifferenceList} />
        <Achievements />
        <LatestProject />
        <ChooseUs />
        <Technologies />
        <Faqs />
        <WorkWithUs />
        <Footer/>
    </React.Fragment>
  )
}

export default Portfolio
