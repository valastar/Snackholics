import React, { useEffect } from 'react'
import './OurSkills.scss'
import AOS from 'aos';

function OurSkills() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <React.Fragment>
            <div className="ourSkills">
                <div class="container">
                    <div class="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Our Skills</h2>
                            <p>Cutting edge solutions to power up your business with our skillset</p>
                        </div>
                        <div class="col-md-3" data-aos="fade-left" data-aos-duration="1000">
                            <h4>- STRATEGY</h4>
                            <ul>
                                <li>Innovation</li>
                                <li>Digital Transformation</li>
                                <li>Business Process Reengineering</li>
                                <li>Customer Experience Management</li>
                                <li>Project Management</li>
                            </ul>
                        </div>

                        <div class="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                            <h4>- DESIGN</h4>
                            <ul>
                                <li>Design Sprint</li>
                                <li>UI/UX Design</li>
                                <li>Experience Design</li>
                                <li>Creative Production</li>
                                <li>Illustration and Motion</li>
                            </ul>
                        </div>

                        <div class="col-md-3" data-aos="fade-up" data-aos-duration="1000">
                            <h4>- TECHNOLOGY</h4>
                            <ul>
                                <li>Web and Mobile Apps</li>
                                <li>e-Commerce</li>
                                <li>Custom Software Development</li>
                                <li>Digital Marketing</li>
                                <li>Artificial Intelligence</li>
                            </ul>
                        </div>

                        <div class="col-md-3" data-aos="fade-right" data-aos-duration="1000">
                            <h4>- GROWTH</h4>
                            <ul>
                                <li>User Acquisition Strategy</li>
                                <li>Analytics and Optimization</li>
                                <li>Workflow Automation</li>
                                <li>New Features Definition</li>
                                <li>Tracking KPIs</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default OurSkills
