import React, {useEffect} from "react";
import AOS from 'aos';
import "./HostingDomain.scss"
import HostingDomainList from "./HostingDomainList.json"
import { Link } from "react-router-dom";

export default function HostingDomain() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className="hostingDomain">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                <div className="title">
                    <p className="tagline">About Quick Growth</p>
                    <h2>Best Hosting & Domain for Your <span>Business</span></h2>
                    <p>High performance secured hosting for your website. Don't lose anymore clients for the slowest speed of your hosting service. Get hosting package now!</p>
                    <Link to="/contact-us" className="btn-custom">Get Started</Link>
                </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="block">
                        <div className="row">
                    {
                        HostingDomainList.map(({chooseTitle,chooseImg},index)=>{
                            return(
                                    <div className="col-md-6 col-6 my-2 px-2" key={index}>
                                        <section data-aos="fade-up"
                                    data-aos-duration="2000">
                                            <img src={chooseImg} alt="img" />
                                        <h4>{chooseTitle}</h4>
                                    </section>
                                    </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}