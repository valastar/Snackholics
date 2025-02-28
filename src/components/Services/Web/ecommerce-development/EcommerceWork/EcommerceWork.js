import React, { useEffect } from 'react'
import './EcommerceWork.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
function EcommerceWork(props) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <React.Fragment>
        <div className={`ecommerceWork ${props.classProps}`}>
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            loop={true}
                            slidesPerView={2.5}
                            centeredSlides={true}
                            spaceBetween={20}
                            speed={500}
                            modules={[Autoplay]}
                            className="mySwipper"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                0: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,    
                                    centeredSlides:false,    
                            }
                            }}
                        >
                            {props.dataList.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <img src={item.imageSrc} alt="Ecommercework" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </div>
            <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
               <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
               </div>
        </div>
    </React.Fragment>
  )
}

export default EcommerceWork
