import React, { useEffect } from 'react'
import AOS from 'aos';
import './CustomExpertTalk.scss'
import { Link } from 'react-router-dom';

const CustomExpertTalk = (props) => {
    useEffect(() => {
        AOS.init();
    }, []);

  return (
    <React.Fragment>
        <section className='strategic'>
            <div className='container'>
                <div className='content'  data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title}</h2>
                    <span className='subHeading'>{props.subHeading}</span>
                    <p>{props.description}</p>
                    
                    <div className="btn-center mt-5"  data-aos="fade-up" data-aos-duration="1000">
                            <Link to="/contact-us" className="btn-custom">Talk to Our Expert</Link>
                    </div>    
                </div>
            </div>
        </section>
        
    </React.Fragment>
  )
}

export default CustomExpertTalk