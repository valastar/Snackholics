import React, { useEffect } from 'react'
import './BeforeAfter.scss'
import AOS from 'aos';

function BeforeAfter() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
        <div className="beforeAfter">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col-md-5">
                        <img className='before' src="/images/services/before.svg" alt="before" />
                    </div>
                    <div className="col-md-7">
                        <h2>Before</h2>
                        <p>The previous design felt a bit outdated, with the main UI element being a central carousel featuring three cards that showcased the company’s value propositions: speed, quality, and service. The cards used retro 1950s-style graphics, with the rocket ship and telephone illustrations being more effective than the quality dial in conveying the message.</p>
                    </div>
                </div>
                <div className="row gx-5 align-items-center">
                <div className="col-md-7">
                        <h2>After</h2>
                        <p>The new design of connerexterior.com replaces the carousel and retro graphics with a sleek, modern look. The page now opens with a bold value proposition and immediately presents three service cards, each offering a brief explanation, straightforward pricing, and a clear call to action. The cards feature vibrant, organic shapes and subtle animations that catch the eye and encourage users to click the CTA, creating a more engaging experience.</p>
                    </div>
                    <div className="col-md-5">
                        <img className='after' src="/images/services/after.svg" alt="before" />
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default BeforeAfter
