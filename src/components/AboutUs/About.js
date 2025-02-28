import React from 'react'
import Header from '../Header/Header'
import AboutBanner from './AboutBanner/AboutBanner'
import Achievments from './Achievements/Achievements'
import OurTeam from './OurTeam/OurTeam'
import Journey from './Journey/Journey'
import Footer from '../Footer/Footer'
import CoreValues from './CoreValues/CoreValues'
import OurServices from './OurServices/OurServices'

function About() {
  return (
    <React.Fragment>
        <Header/>
        <AboutBanner />
        <Achievments/>
        <CoreValues />
        <OurServices />
        <OurTeam />
        <Journey />
        <Footer/>
    </React.Fragment>
  )
}

export default About
