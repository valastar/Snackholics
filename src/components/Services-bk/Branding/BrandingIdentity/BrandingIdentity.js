import React, { useEffect } from 'react'
import './BrandingIdentity.scss'
import AOS from 'aos';
function BrandingIdentity() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <div className="brandingIdentity">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Why brand identity so
                        <span> Important?</span></h2>
                    </div>
                <div className="brandIdentity">
                    <img src="/images/services/brandIdentity.svg" alt="brandIdentity" />
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BrandingIdentity
