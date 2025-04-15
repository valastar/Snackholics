import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Banner from './Banner/Banner'
import AboutUs from './AboutUs/AboutUs'
import Services from './Services/Services'
import OurSkills from './OurSkills/OurSkills'
import WhyQuickGrowthSection from './WhyQuickGrowth/WhyQuickGrowthSection'
import RequestQuote from './RequestQuote/RequestQuote'
import OurProcess from './OurProcess/OurProcess'
import ClientSays from './ClientSays/ClientSays'
import OurTeams from './OurTeams/OurTeams'
import OurProcessList from './OurProcessList.json'
function Home() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      {/* <OurSkills /> */}
      {/* <OurProcess title="Our Process" description="Our company is guided by a foundation of four core principles" dataList={OurProcessList}/> */}
      {/* <WhyQuickGrowthSection />
      <ClientSays /> */}
      {/* <OurTeams /> */}
      {/* <RequestQuote />
      <Footer /> */}
    </React.Fragment>
  )
}

export default Home
