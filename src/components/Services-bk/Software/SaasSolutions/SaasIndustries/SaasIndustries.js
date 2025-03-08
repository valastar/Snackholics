import React, { useEffect } from 'react'
import './SaasIndustries.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function SaasIndustries(props) {
    useEffect(() => {
        AOS.init();
    }, [])
 
    return (
        <React.Fragment>
            <div className={`SaasIndustries ${props.classProps}`}>
                <div className='container'>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="row">

                        {props.dataList.map((item, index) => (
                            <div className="col-sm-12 col-lg-6" data-aos="fade-right" data-aos-duration="1000" key={index}>
                                <div className="industry">
                                    <div className="block">
                                        <img src={item.imageSrc} alt="coreImg" />
                                        <div>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='text-center'>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SaasIndustries
