import React, { useEffect } from 'react'
import AOS from 'aos';
import './CustomBanner.scss'
import { Link } from 'react-router-dom'
function CopywritingBanner(props) {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className={`customBanner ${props.classProps}`}>
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>{props.title}</h2>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadCrumbs">
                <div className="container">
                    <p data-aos="fade-left" data-aos-duration="1000">
                        <Link to="/" className='home'>Home</Link>
                        <span>/</span>
                        <Link to={props.breadCrumbLink} className='page'>{props.breadCrumbName}</Link>
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CopywritingBanner
