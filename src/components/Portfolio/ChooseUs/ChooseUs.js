import React, {useEffect} from "react";
import AOS from 'aos';
import "./ChooseUs.scss"
import chooseList from "./chooseList.json"

export default function ChooseUs() {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
        <div className="results_wrapper">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-6">
                <div className="title">
                    <h2>Why Customer
                    Choose us</h2>
                    <p>Best features with the latest technologies to make fast and modern website.</p>
                </div>
                </div>
                <div className="col-md-12 col-lg-6">
                    <div className="block">
                        <div className="row">
                    {
                        chooseList.map(({chooseTitle,chooseImg},index)=>{
                            return(
                                    <div className="col-md-4 col-6" key={index}>
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