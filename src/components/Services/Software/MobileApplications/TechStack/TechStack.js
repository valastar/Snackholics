import React, { useEffect } from 'react';
import './TechStack.scss';
import AOS from 'aos';


const TechStack = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
      <div className="TechStack">
        <div className="container">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>{props.title}</h2>
          </div>
          {props.dataList.map((stack, index) => (
            <div className="stack" key={index} data-aos="fade-up" data-aos-duration="1000">
              <div className="p-title">
                <p>{stack.title}</p>
              </div>
              <div className="d-flex">
                {stack.images.map((image, imgIndex) => (
                  <img key={imgIndex} src={image} alt={`${stack.title} Stack`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechStack;
