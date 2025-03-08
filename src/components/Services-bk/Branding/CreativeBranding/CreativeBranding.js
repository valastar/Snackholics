import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import './CreativeBranding.scss';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function CreativeBranding() {
  const videoRef = useRef(null); // Reference to control the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback

  useEffect(() => {
    AOS.init();
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true); // Update the state to hide play button and poster
    }
  };

  return (
    <React.Fragment>
      <div className="creativeBranding">
        <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-9 col-md-8" data-aos="fade-right" data-aos-duration="1000">
              <div className="title">
                <div className="wrapper">
                <h2><span>Creative</span> Branding
                Agency.</h2>
                <p className='description'>Brand identity is an essential part of any company that means business. it’s the impression your brand makes on people, without a word spoken.</p>
                </div>
              </div>
              <div className="videoWrappers">
        <div className="videoContainer">
          <video
            ref={videoRef}
            loop
            muted
            className={isPlaying ? 'video playing' : 'video'} // Add class based on isPlaying
            poster='/images/services/brandingVideo.svg'
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <div className="custom-play-button" onClick={handlePlayVideo}>
              <img src="/images/services/play.svg" alt="Play Button" className="play-icon" />
            </div>
          )}
        </div>
        </div>
            </div>
            <div className="col-lg-3 col-md-4" data-aos="fade-left" data-aos-duration="1000">
                <div className="facts">
                <div className="block">
                                <p><CountUp end={7} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Years <br /> Experience</span>
                            </div>
                            <div className="block">
                                <p><CountUp end={206} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Complete <br /> Project</span>
                            </div>
                            <div className="block">
                                <p><CountUp end={115} duration={10}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <small ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>+</p>
                                <span>Trusted <br /> Company</span>
                            </div>
                            <div className="logos">
                              <img src="/images/services/brandingLogos.svg" alt="brandingLogos" />
                            <button className='get-started'><img src="/images/services/getStarted.svg" alt="getStarted" /> Get Started</button>
                            </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreativeBranding;
