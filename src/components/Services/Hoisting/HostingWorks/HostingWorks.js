import React, { useEffect } from 'react'
import './HostingWorks.scss'
import AOS from 'aos';


function HostingWorks() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="hostingWorks">
        <div className='container'>
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>How it <span>Works</span></h2>
            <p>Web hosting works by providing a server space for your website's files and data, making it accessible to users online.</p>
          </div>
         <div className="row">
          <div className="col-md-12 col-lg-4" data-aos="fade-right" data-aos-duration="1000">
            <div className="block">
              <img src="/images/services/hostingw1.svg" alt="coreImg" />
              <div>
              <h3>Choose A Domain</h3>
              <p>Choose a concise name that's easy to type, spell, and remember.</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4" data-aos="fade-down" data-aos-duration="1000">
            <div className="block">
              <img src="/images/services/hostingw2.svg" alt="coreImg" />
              <div>
              <h3>Create your account</h3>
              <p>Creating an account for a domain registration service.</p>
              </div>
            </div>
            </div>
            <div className="col-md-12 col-lg-4" data-aos="fade-down" data-aos-duration="1000">
            <div className="block">
              <img src="/images/services/hostingw3.svg" alt="coreImg" />
              <div>
              <h3>Launch your hosting</h3>
              <p>Launching your hosting involves setting up web hosting for your website, allowing it to be accessible online.</p>
              </div>
            </div>
            </div>
         </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HostingWorks
