import React, { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import AOS from "aos";
import './Faqs.scss'
import { Link } from 'react-router-dom';
function Faqs() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <React.Fragment>
            <div className="faqs" id="faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
                            <div className="title" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Frequently Asked <span>Questions</span></h2>
                            </div>
                        </div>
                        <div className="col-md-12" data-aos="fade-left" data-aos-duration="1000">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>What is VR training?</Accordion.Header>
                                    <Accordion.Body>
                                        This is a training method that uses virtual reality to simulate working environments and risk-free safety, health and environment (EHS) situations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What makes VR training more effective than traditional methods?</Accordion.Header>
                                    <Accordion.Body>
                                        VR enables complete, interactive immersion, improving information retention and risk understanding.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Is virtual reality training suitable for all sectors?</Accordion.Header>
                                    <Accordion.Body>
                                    Virtue-Simulation Safety Company offers cutting-edge AR/VR training solutions to improve occupational health and safety. Our immersive simulations recreate real-world scenarios to enhance workplace safety, prevent accidents, and ensure compliance across high-risk industries.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What equipment is needed for virtual reality training?</Accordion.Header>
                                    <Accordion.Body>
                                    Virtual reality training requires a VR headset, motion controllers, and a compatible computer or gaming console. Depending on the setup, additional equipment like sensors or gloves may be used to enhance the immersive experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>How to measure the effectiveness of VR training?</Accordion.Header>
                                    <Accordion.Body>
                                    The effectiveness of VR training can be measured through employee performance assessments, real-time feedback, knowledge retention tests, and safety incident tracking. Improvements in skill application and reduced workplace accidents are key indicators of successful training.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Does Immersive Factory offer support for setting up VR training courses?</Accordion.Header>
                                    <Accordion.Body>
                                    Yes, Immersive Factory offers comprehensive support for setting up VR training courses, including installation guidance, technical assistance, and customization to meet specific industry needs, ensuring a seamless integration into your safety training program.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
                        <Link to="/contact-us" className="btn-custom">BOOK A CALL</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Faqs
