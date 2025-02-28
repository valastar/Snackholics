import React, { useEffect } from "react";
import AOS from 'aos';
import "./HostingMind.scss"

export default function HostingMind() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="hostingMind">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-5 col-lg-6">
                        <div className="block">
                           <img src="/images/services/hostingMian.svg" alt="mainImg" />
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                        <div className="title">
                            <h2>Stronger Website
                                Security, <span>More Peace
                                    of Mind</span></h2>
                            <p>Our security systems are always on the alert, so you don't have to be.</p>
                            <ul>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> 24/7 monitoring with server checks every 0.5 sec</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> AI protection blocking millions of brute-force attempts</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Built-in Spam Protection for a zen inbox</li>
                                <li><img src="/images/services/hostingCheck.svg" alt="check" /> Geo-distributed Daily Backups for extra peace of mind</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}