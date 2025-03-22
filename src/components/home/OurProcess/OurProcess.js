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
            description: 'We begin by analyzing your goals, challenges, and market dynamics to craft a tailored strategy.'
        },
        {
            number: '02',
            title: 'ENGAGE',
            description: 'Our team collaborates closely with you to align strategies and expectations for maximum impact.'
        },
        {
            number: '03',
            title: 'INNOVATE',
            description: 'Creative and data-driven solutions are developed to address unique business needs.'
        },
        {
            number: '04',
            title: 'DELIVER',
            description: 'We execute strategies with precision, ensuring on-time delivery and measurable results.'
        }
    ];

    return (
        <div className={`ourProcess ${props.classProps}`}>
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title || 'OUR PROCESS'}</h2>
                    <p>{props.description || 'How We Work to Deliver Results'}</p>
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
