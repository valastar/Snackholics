import React,{useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Pagination } from 'swiper/modules';
import AOS from 'aos';
import './BrandingWorks.scss'
function BrandingWorks() {
    useEffect(() => {
        AOS.init();
    }, []);
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + 0+(index + 1) + '</span>';
        },
      };
    const slideData = [
        {
            title: 'Research',
            description: 'Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.'
        },
        {
            title: 'Strategy',
            description: 'Pink salmon cherry salmon combtail gourami frigate mackerel snake mackerel'
        },
        {
            title: 'Design',
            description: 'Wahoo mora deep sea smelt cat shark atlantic upside-down catfish finback cat'
        },
        {
            title: 'Research',
            description: 'Reedfish bonefish trahira bristlenose catfish, longnose lancetfish morid.'
        },
    ]
    return (
        <React.Fragment>
            <div className="brandingWorks">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>how it works</h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={pagination}
                            speed={500}
                            modules={[Autoplay,Pagination]}
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
                            {slideData.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                          <div className="workCard">
                                            <h2>0{index+1}</h2>
                                              <div>
                                              <h3>{item.title}</h3>
                                              <p>{item.description}</p>
                                              </div>
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

export default BrandingWorks
