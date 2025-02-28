import React, { useEffect } from 'react'
import './CustomFeatures.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function CustomFeatures(props) {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <React.Fragment>
            <div className={`customFeatures ${props.classProps}`}>
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>{props.title}</h2>
                        {props.description && <p>{props.description}</p>}
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row justify-content-center">
                            {props.dataList.map((item, index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="customFeatures__card">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CustomFeatures
