import React from 'react'
import Header from '../Header/Header'
import AboutBanner from './AboutBanner/AboutBanner'
import Achievements from './Achievements/Achievements'
import OurTeam from './OurTeam/OurTeam'
import Journey from './Journey/Journey'
import Footer from '../Footer/Footer'
import CoreValues from './CoreValues/CoreValues'
import OurServices from './OurServices/OurServices'

function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header/>
      <AboutBanner />
      <div className="container mx-auto px-4">
        {/* <Achievements/> */}
        {/* <CoreValues /> */}
      </div>
      {/* <OurServices /> */}
      <div className="container mx-auto px-4">
        {/* <OurTeam /> */}
        <Journey />
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default About