import React, { useEffect } from 'react';
import './MakeDifferent.scss';
import AOS from 'aos';

function MakeDifferent(props) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className={`makeDifferent ${props.classProps}`}>
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title}</h2>
                </div>
                <div className="row">
                    {props.dataList.map((item, index) => (
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration="1000" key={index}>
                            <div className="block">
                            {item.img && <img src={item.img} alt={`makeImg ${index + 1}`} />}
                                <h3>{item.heading}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MakeDifferent;
