import React, { useEffect } from 'react';
import './OurProcess.scss';
import AOS from 'aos';

function OurProcess(props) {
    useEffect(() => {
        AOS.init();
    }, []);

    const processSteps = [
        {
            number: '01',
            title: 'UNDERSTAND',
            description: 'Begin by diving deep into project requirements and client needs to establish a strong foundation.'
        },
        {
            number: '02',
            title: 'ENGAGE',
            description: 'Collaborate with clients to align on goals, expectations, and strategies.'
        },
        {
            number: '03',
            title: 'INNOVATE',
            description: 'Develop creative, groundbreaking solutions tailored to meet unique challenges.'
        },
        {
            number: '04',
            title: 'DELIVER',
            description: 'Execute and ensure timely delivery of high-quality solutions that exceed expectations.'
        }
    ];

    return (
        <div className={`ourProcess ${props.classProps}`}>
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title || 'OUR PROCESS'}</h2>
                    <p>{props.description || 'Our company is guided by a foundation of four core principles.'}</p>
                </div>
                <div className="process-grid" data-aos="fade-up" data-aos-duration="1000">
                    {processSteps.map((step, index) => (
                        <div key={index} className="process-step">
                            <span className="step-number">{step.number}</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OurProcess;
