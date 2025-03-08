import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import './MaintenanceServices.scss';

function MaintenanceServices(props) {
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
      <div className="maintenanceServices">
        <div className="container">
          <div className="title">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right" data-aos-duration="1000">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
              </div>
              <div className="col-md-6" data-aos="fade-left" data-aos-duration="1000">
                <p>{props.sideDetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="videoWrapper">
        <div className="container videoContainer">
          <div className="col-md-12">
          <video
            ref={videoRef}
            loop
            muted
            className={isPlaying ? 'video playing' : 'video'} // Add class based on isPlaying
            poster={props.posterImg}
          >
            <source src={props.videoLink} type="video/mp4" />
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
    </React.Fragment>
  );
}

export default MaintenanceServices;
