import React, { useEffect } from 'react'
import AOS from 'aos';
import './AiRoadMap.scss'

const AiRoadMap = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
          "date": "01/10",
            "title": "Discovery and Planning",
          "description": "We partner with you to grasp your vision and goals, pinpointing critical AI opportunities and challenges."
        },
        {
          "date": "02/10",
            "title": "Data Collection and Analysis",
          "description": "We collect and analyze essential data to provide a reliable foundation for successful AI model development."
        },
        {
          "date": "03/10",
            "title": "AI Strategy Formulation",
          "description": "Our team crafts a personalized AI strategy tailored to your business goals and technical specifications."
        },
        {
          "date": "04/10",
            "title": "Proof of Concept Development",
          "description": "Our specialists develop a Proof of Concept (PoC) to showcase the feasibility & potential benefits of the AI solution."
        },
        {
          "date": "05/10",
            "title": "Feedback and Iteration",
          "description": "Guided by insights from the PoC, we iteratively enhance the AI model and approach to more effectively address your requirements."
        },
        {
          "date": "06/10",
            "title": "MVP Development",
          "description": "We develop a Minimum Viable Product (MVP) that integrates the AI solution to effectively tackle essential business challenges."
        },
        {
          "date": "07/10",
            "title": "Testing and Validation",
          "description": "Our team performs comprehensive testing and validation to confirm that the MVP aligns with quality standards and business goals."
        },
        {
          "date": "08/10",
            "title": "Deployment and Integration",
          "description": "We support the deployment of the AI MVP into your production environment, ensuring smooth integration with current systems."
        },
        {
          "date": "09/10",
            "title": "Training and Support",
          "description": "Our support goes beyond deployment, providing training for your team & continuous assistance to ensure successful adoption."
        },
        {
          "date": "10/10",
            "title": "Scale and Optimize",
          "description": "Together, we scale the MVP into a robust product, optimizing performance & integrating new features informed by user insights."
        }
      ]
  return (
    <React.Fragment>
            <div className="ai-roadmap">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Our Proven Roadmap to <br />
                       <span> AI Development Success</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                               <div className='col-lg-6'>
                                        <div className="wcu-quick__card mvp-card">
                                            <span>AI POC & MVP PROCESS</span>
                                            <h3>Turning Uncertainty into Results</h3>
                                            <img src='/images/services/mvp-vector.svg' width='100%' alt='arrow'/>
                                            <div className='mvp-profiles'>
                                                <img src='/images/services/mvp-profile-3.svg' alt='profile'/>
                                                <img src='/images/services/mvp-profile-2.svg' alt='profile'/>
                                                <img src='/images/services/mvp-profile-1.svg' alt='profile'/>
                                            </div>
                                            <p>Our Experts Connect Your Business Goals with User Needs for Improved Outcomes.</p>
                                        </div>
                               </div>
                               <div className='col-lg-6'>
                                 <div className='row'>
                                 {slideData.map((item, index) => (
                                    <div className='col-12' key={index}>
                                        <div className="wcu-quick__card">
                                            <span>{item.date}</span>
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                 ))}
                                 </div>
                               </div>
                        </div>
                
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default AiRoadMap