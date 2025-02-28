import React, { useEffect } from 'react'
import './Schedule.scss'
import AOS from 'aos';

function Schedule() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="schedule" data-aos="fade-up" data-aos-duration="1000">
            <div className="container">
                <div className="block">
                    <img src="/images/services/schedule.svg" alt="schedule" />
                    <div className="content">
                        <h3>Schedule a <span>Meeting</span></h3>
                        <p className='heading'>Keen to explore your plans to develop and grow your online store or eCommerce website with one of our eCommerce experts?</p>
                        <p className='subHeading'>We’re always happy to chat through your ideas or project.</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Schedule
