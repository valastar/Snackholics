import React, { useEffect } from 'react'
import AOS from 'aos';

const TechStackMvp = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
        <div className="TechStack">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2> <span> </span></h2>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Front-End</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/react-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/java-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/vue-icon.svg' alt='Software Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Back-End</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/node-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/python-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/ruby-icon.svg' alt='Software Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Mobile</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/kotlin-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/swift-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/java-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/obj-c-icon.svg' alt='Software Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Databases</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/mysql-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/postgresql-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/mongo-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/redis-icon.svg' alt='Software Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Infrastructure</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/heroku-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/aws-icon.svg' alt='Software Develeopment Stack' />
                            <img src='/images/services/gcp-icon.svg' alt='Software Develeopment Stack' />
                        </div>
                </div>
                
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default TechStackMvp