import React, { useEffect } from 'react'
import AOS from 'aos';
import './AiToolsTech.scss'

const AiToolsTech = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
        <div className="AiToolsTech">-
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>Tools &   <span> Technologies</span></h2>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Front-End</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-1.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-2.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-3.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-4.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Back-End</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-5.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-6.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-7.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Databases</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-8.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-9.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-10.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-11.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-12.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Communication</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-13.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-14.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-15.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-16.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-17.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Deployment Tools</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-18.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-19.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>Server</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/ts-20.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-21.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/ts-22.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>NLP & Machine Learning</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/tensor-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/pytorch-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/spacy-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/scikit-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/keras-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/toolkit-icon.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <p>AI Models</p>
                        </div>
                        <div className='d-flex'>
                            <img src='/images/services/gpt-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/llama-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/stable-icon.svg' alt='App Develeopment Stack' />
                            <img src='/images/services/gemini-icon.svg' alt='App Develeopment Stack' />
                        </div>
                </div>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default AiToolsTech