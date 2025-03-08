import React, { useEffect } from 'react'
import './CaseStudies.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const CaseStudies = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <React.Fragment>
            <div className="CaseStudies" >
                <div class="container">
                    <div class="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Discover Our <span> Case Studies</span></h2>
                        </div>

                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Swiper
                        autoplay={true}
                        centeredSlides={false}
                        loop={true}
                        slidesPerView={1.5}
                        spaceBetween={10}
                        pagination={true}
                        navigation={true}
                        speed={500}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="swiper_container"
                        breakpoints={{
                            1400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            1000: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            600: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                centeredSlides: false,
                            }
                        }}
                    >
                        <div className='container'>
                            <SwiperSlide key='' className="swiper-slide">
                                <div className='container'>
                                    <div className='case-study-card'>
                                        <div className='row align-items-center'>
                                            <div className='col-lg-6 col-xl-4'>
                                                <img src='/images/services/case-study-1.svg' width='100%' alt='case study' />
                                            </div>
                                            <div className='col-lg-6 col-xl-8'>
                                                <div className='slider-content'>
                                                    <h4>Customer Support AI Chatbot Development Service for E-commerce</h4>
                                                    <div className='tags'>
                                                        <li>AWS</li>
                                                        <li>OpenAI API</li>
                                                        <li>Node js</li>
                                                        <li>React js</li>
                                                        <li>React Native</li>
                                                        <li>E-commerce</li>
                                                    </div>
                                                    <h5>How we enhanced customer experience for a leading e-commerce company:</h5>
                                                    <ul>
                                                        <li>The company reached 70% reduction in average customer response time.</li>
                                                        <li>The AI chatbot ensured round-the-clock assistance, boosting customer satisfaction rates by 30% due to its non-stop availability.</li>
                                                        <li>With the AI's learning capabilities, the chatbot resolved three-quarters of issues without escalation.</li>
                                                        <li>Drastic decrease in manual ticket processing, allowing staff to focus on more complex tasks.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='' className="swiper-slide">
                                <div className='container'>
                                    <div className='case-study-card'>
                                        <div className='row align-items-center'>
                                            <div className='col-lg-6 col-xl-4'>
                                                <img src='/images/services/case-study-1.svg' width='100%' alt='case study' />
                                            </div>
                                            <div className='col-lg-6 col-xl-8'>
                                                <div className='slider-content'>
                                                    <h4>Customer Support AI Chatbot Development Service for E-commerce</h4>
                                                    <div className='tags'>
                                                        <li>AWS</li>
                                                        <li>OpenAI API</li>
                                                        <li>Node js</li>
                                                        <li>React js</li>
                                                        <li>React Native</li>
                                                        <li>E-commerce</li>
                                                    </div>
                                                    <h5>How we enhanced customer experience for a leading e-commerce company:</h5>
                                                    <ul>
                                                        <li>The company reached 70% reduction in average customer response time.</li>
                                                        <li>The AI chatbot ensured round-the-clock assistance, boosting customer satisfaction rates by 30% due to its non-stop availability.</li>
                                                        <li>With the AI's learning capabilities, the chatbot resolved three-quarters of issues without escalation.</li>
                                                        <li>Drastic decrease in manual ticket processing, allowing staff to focus on more complex tasks.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key='' className="swiper-slide">
                                <div className='container'>
                                    <div className='case-study-card'>
                                        <div className='row align-items-center'>
                                            <div className='col-lg-6 col-xl-4'>
                                                <img src='/images/services/case-study-1.svg' width='100%' alt='case study' />
                                            </div>
                                            <div className='col-lg-6 col-xl-8'>
                                                <div className='slider-content'>
                                                    <h4>Customer Support AI Chatbot Development Service for E-commerce</h4>
                                                    <div className='tags'>
                                                        <li>AWS</li>
                                                        <li>OpenAI API</li>
                                                        <li>Node js</li>
                                                        <li>React js</li>
                                                        <li>React Native</li>
                                                        <li>E-commerce</li>
                                                    </div>
                                                    <h5>How we enhanced customer experience for a leading e-commerce company:</h5>
                                                    <ul>
                                                        <li>The company reached 70% reduction in average customer response time.</li>
                                                        <li>The AI chatbot ensured round-the-clock assistance, boosting customer satisfaction rates by 30% due to its non-stop availability.</li>
                                                        <li>With the AI's learning capabilities, the chatbot resolved three-quarters of issues without escalation.</li>
                                                        <li>Drastic decrease in manual ticket processing, allowing staff to focus on more complex tasks.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>

            </div>
        </React.Fragment>
    )
}

export default CaseStudies