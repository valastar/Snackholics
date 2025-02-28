import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactBanner from './ContactBanner/ContactBanner'
import RequestQuote from '../home/RequestQuote/RequestQuote'

function ContactUs() {
  return (
    <React.Fragment>
      <Header />
      <ContactBanner />
      <RequestQuote />
      <Footer />
    </React.Fragment>
  )
}

export default ContactUs
