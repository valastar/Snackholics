import React, { useEffect } from 'react'
import './PainPoints.scss'
import AOS from 'aos';

function PainPoints() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="painPoints">
            <div className="container">
            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>We hear these pain points often
                    <span> Maybe you can relate.</span></h2>
            </div>
            </div>
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-3">
                        <p>Our website looks great,
                        but it isn’t getting results.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Our website looks terrible,
                        and it’s hurting our brand.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Our templated website is
                        limiting our growth.</p>
                    </div>
                    <div className="col-md-3">
                        <p>Our templated website is
                        limiting our growth.</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default PainPoints
