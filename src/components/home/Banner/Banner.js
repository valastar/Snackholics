import React, { useEffect } from 'react'
import './Banner.scss'
import AOS from 'aos';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function Banner() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <React.Fragment>
      <div className="banner">
        <div className="container">
         <img src="/images/home/homeBanner.svg" alt="img" />
        </div>
       <div data-aos="fade-up" data-aos-duration="1000">
       <Swiper
            slidesPerView={5.5}
            spaceBetween={10}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={5000}
            centeredSlides={true}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
            breakpoints={{
              1400: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
          >
            {[...Array(20).keys()].map((index) => (
              <SwiperSlide key={index}>
                <div className="imgBlock">
                  <img src={`/images/home/slider${(index % 5) + 1}.svg`} alt="sliderImg" />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
       </div>
      </div>
    </React.Fragment>
  )
}

export default Banner
