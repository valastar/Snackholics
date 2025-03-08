import React, { useEffect } from 'react'
import './SaasDevProcess.scss'
import AOS from 'aos';


const SaasDevProcess = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <React.Fragment>
        <div className="SaasDevProcess">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>SaaS Development <span> Process</span></h2>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <span>01</span>
                            <p>Discovery</p>
                        </div>
                        <div className='d-grid'>
                            <p>Each project in our Canadian SaaS company starts with a discovery session to gather essential details about your product, target audience, and functionality. Our business analysts conduct market research on your industry and competitors to reduce risks and improve efficiency.</p>
                            <div className='d-flex'>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                            </div>

                        </div>
                        
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <span>02</span>
                            <p>Design</p>
                        </div>
                        <div className='d-grid'>
                        <p>Once your project requirements are defined, our Canadian UX/UI team creates wireframes to map out page layouts and ensure usability. After your approval, we transform these wireframes into interactive prototypes that guide the final UI design.</p>
                        <div className='d-flex'>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                        </div>
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <span>03</span>
                            <p>Development</p>
                        </div>
                        <div className='d-grid'>
                        <p>Our Canadian SaaS development company embraces Agile principles to enhance flexibility, reduce risks, and improve project control. The development process is organized into short sprints, starting with task prioritization followed by development. Once a feature is completed, our quality assurance team tests it before releasing it to production.</p>
                        <div className='d-flex'>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                                <button className='btn-process'>Process</button>
                        </div>
                        </div>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <span>04</span>
                            <p>Release</p>
                        </div>
                        <p>The release of your completed SaaS project signifies its final version being distributed to the target audience after all bugs are resolved and enhancements made. Once deployed to production, you can observe user interactions with your digital product. Our software solution team also prepares release notes that detail fixed bugs and key changes, ensuring effective communication with end-users and enhancing their overall experience.</p>
                </div>
                <div className='stack' data-aos="fade-up" data-aos-duration="1000">
                        <div className='p-title'>
                            <span>05</span>
                            <p>Support</p>
                        </div>
                        <p>You can count on our Canadian SaaS development company for reliable support and maintenance services. We continuously monitor your cloud app’s performance, fixing any bugs reported by end-users and enhancing the solution with new features. For after-launch support, you can either pay for a set number of hours per month or compile a backlog of tasks, ideally accumulating at least eighty working hours to reduce costs.</p>
                </div>
            </div>
            
        </div>
    </React.Fragment>
  )
}

export default SaasDevProcess