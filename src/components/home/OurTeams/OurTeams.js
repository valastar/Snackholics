import React, {useEffect } from 'react';
import './OurTeams.scss';
import AOS from 'aos';

function OurTeams() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <React.Fragment>
            <div className="OurTeams">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Our <span>Team</span></h2>
                        </div>


                        <div className="col-md-4">
                            <div className="px-2">
                                <div class="flip-card"  data-aos="fade-right" data-aos-duration="1000">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="/images/our-team-1.jpeg" alt="Avatar" />
                                            <div className="flip-bottom-box">
                                                <h3>Cody Legge</h3>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h2 className="slide-name">Cody Legge</h2>
                                            <p className="slide-description">"Let's connect and talk! I am the business owner of <span>Nexus Division Entertainment Inc</span>, & <span>QuickGrowth.ai</span>. As a seasoned Marketing and Business Development Specialist, I specialize in guiding startups through their growth journey. With a proven track record of managing multiple clients simultaneously, I excel in creating bespoke marketing and business development strategies that cater to diverse budgetary needs. My expertise lies in comprehensive market research, digital marketing, sales strategies, and operational planning, all aimed at establishing a solid market presence and ensuring long-term success for our clients."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="px-2">
                                <div class="flip-card"  data-aos="fade-up" data-aos-duration="1000">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="/images/our-team-2.jpeg" alt="Keri" />
                                            <div className="flip-bottom-box">
                                                <h3>Keri</h3>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h2 className="slide-name">Keri</h2>
                                            <p className="slide-description">"With a rich tapestry of experiences spanning social services, customer engagement, and marketing and business development, I bring a unique blend of <span>empathy</span>, <span>strategic thinking</span>, and <span>client-focused innovation</span> to my current role. My journey has been marked by a steadfast commitment to making a tangible difference in the lives of individuals and communities, a principle that drives my marketing strategies and business development initiatives."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="px-2">
                                <div class="flip-card"  data-aos="fade-left" data-aos-duration="1000">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <img src="/images/our-team-3.jpeg" alt="Muhammad Abdullah" />
                                            <div className="flip-bottom-box">
                                                <h3>Muhammad Abdullah</h3>
                                            </div>
                                        </div>
                                        <div class="flip-card-back">
                                            <h2 className="slide-name">Muhammad Abdullah</h2>
                                            <p className="slide-description">"A passionate tech enthusiast, Muhammad Abdullah has <span>09+ years</span> of experience to create innovative, disruptive solutions. As a <span> skilled Technical Lead</span>, he is committed to collaborating on transformative projects and exceeding customer expectations."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                  

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default OurTeams;
