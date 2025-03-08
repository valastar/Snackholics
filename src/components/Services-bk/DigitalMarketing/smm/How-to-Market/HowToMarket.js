import React, { useEffect } from "react";
import AOS from 'aos';
import "./HowToMarket.scss"

const HowToMarket = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="howMarket">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>How to Market on  <span> Social Media</span></h2>
                </div>
                <div className="row align-items-center">

                    <div className="col-md-7 col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                        <div className="title">
                            <p>
                                Are you struggling to get the best results from your social
                                media marketing strategy? Becoming a thought leader does
                                not happen overnight. However, with creative social media
                                marketing ideas and a data-driven social media marketing
                                business approach, you can position your brand as an expert in
                                your respective field in no time.

                                <br />
                                <br />

                                From choosing the right social media channels to developing
                                your social media content marketing strategy, every step is
                                crucial to creating a successful social media marketing
                                business campaign. Ready to begin marketing through social
                                media?

                                <br />
                                <br />

                                Our social media marketing firm has put together the best
                                practices to promote your business across online platforms
                                effectively. Follow these social media marketing tips from
                                Thrive’s expert social media marketing consultants:
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                        <div className="block">
                            <img src="/images/services/how-to-market.svg" alt="mainImg" />
                        </div>
                    </div>
                </div>

                <div className="dosDonts">
                <div className="row">
                    <div className="col-lg-6">
                            <img src="/images/services/dos.svg" alt="do's" />
                            <ul>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Conduct extensive market research</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Identify the appropriate social media marketing platforms</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Analyze your audience behavior</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Craft engaging content</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Engage with your followers</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Run targeted social media advertisements</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Combine your marketing channels</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Partner with industry influencers</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Optimize your social media pages</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Ensure brand consistency across platforms</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Conduct A/B tests of your ad campaigns</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Analyze campaign results</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Optimize your social media campaigns based on analytics</li>
                            </ul>
                    </div>
                    <div className="col-lg-6 Donts">
                            <img src="/images/services/donts.svg" alt="dont's" />
                            <ul>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Work without a social media marketing plan</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Copy competitors’ social media marketing ideas that do not
                                match your branding</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Measure the wrong metrics</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Treat all social media marketing channels the same</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Rely too much on automation</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Buy followers</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Use irrelevant hashtags</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Keep silent on comment sections and threads</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Cross-post on your social media accounts</li>
                            </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default HowToMarket