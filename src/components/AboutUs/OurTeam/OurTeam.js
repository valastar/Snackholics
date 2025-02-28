import React, { useEffect } from 'react'
import './OurTeam.scss'
import { Link } from 'react-router-dom'
import AOS from 'aos';


function OurTeam() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="ourTeam">
        <div className='container'>
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Meet Our <span>Team</span></h2>
          </div>
          <div className="row">
          <div className="col-md-6 mb-3" data-aos="fade-right"
              data-aos-duration="1000">
              <div className="mainBlock">
              <div className="wrapImg">
                <img src="/images/aboutUs/team3.svg" alt="a1" />
                <div className="description">
                  <h3>Jack O'Halloran</h3>
                  <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                </div>
                </div>
                <div className="wrap">
                <div className="content">
                  <h3>Jack O'Halloran</h3>
                  <span>Co-Founder / CEO</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/aboutUs/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3" data-aos="fade-left"
              data-aos-duration="1000">
              <div className="mainBlock">
              <div className="wrapImg">
                <img src="/images/aboutUs/team3.svg" alt="a1" />
                <div className="description">
                  <h3>Alex Sheverdin</h3>
                  <p>A Co-Founder is someone who helps establish a company from the ground up, often sharing the vision and responsibilities of the business with one or more other individuals. Co-Founders bring unique skills and expertise to the table, which can complement each other and drive the company forward.</p>
                </div>
                </div>
                <div className="wrap">
                <div className="content">
                  <h3>Alex Sheverdin</h3>
                  <span>C.O.O., SVP Instructor Led Training</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/aboutUs/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-right"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/aboutUs/team2.svg" alt="a1" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>Co-Founder, Senior Consultant</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/aboutUs/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-up"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/aboutUs/team4.svg" alt="a2" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>SVP of VR & Online Learning</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/aboutUs/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3" data-aos="fade-left"
              data-aos-duration="1000">
              <div className="block">
                <img src="/images/aboutUs/team5.svg" alt="a3" />
                <div className="wrap">
                <div className="content">
                  <h3>Anastasia Yatsun</h3>
                  <span>Senior Consultant</span>
                </div>
                <div className="social">
                        <Link to=""><img src="/images/aboutUs/social1.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social2.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social4.svg" alt="socialIcon" /></Link>
                        <Link to=""><img src="/images/aboutUs/social5.svg" alt="socialIcon" /></Link>
                    </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default OurTeam
