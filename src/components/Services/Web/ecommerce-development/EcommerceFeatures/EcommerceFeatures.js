import React, {  useEffect } from 'react'
import './EcommerceFeatures.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';
function EcommerceFeatures(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
        <div className="ecommerceFeatures">
            <div className="container">
                <div className="title" data-aos="fade-up" data-aos-duration="1000">
                    <h2>{props.title} <span>{props.titleHighlight}</span></h2>
                    <p>{props.description}</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            navigation={true}
                            speed={500}
                            modules={[Navigation,Autoplay]}
                            className="mySwipper"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                600: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,    
                                    centeredSlides:false,    
                            }
                            }}
                        >
                            {props.dataList.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                          <div className="ecommerceFeatures__card">
                                              <img src={item.imageSrc} alt="Ecommerce Features" />
                                              <h3>{item.title}</h3>
                                              <p>{item.description}</p>
                                          </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EcommerceFeatures
