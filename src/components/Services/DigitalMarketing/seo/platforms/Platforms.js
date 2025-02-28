import React, { useEffect } from 'react'
import './platform.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

const Platforms = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);
   
      
    return (
        <React.Fragment>
            <div className={`Seo-Platforms ${props.classProps}`}>
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>{props.title}</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {props.dataList.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="plat-card">
                                        <div className='plat-head'>
                                            <h3>{item.title}</h3>
                                            <div className='plat-img-wrapper'>
                                                 <img src={item.imageSrc} alt="Platforms" />
                                            </div>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">LET'S TALK</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Platforms