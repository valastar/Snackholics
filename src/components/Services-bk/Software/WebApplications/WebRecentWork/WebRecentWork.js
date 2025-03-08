import React, { useEffect } from 'react'
import './WebRecentWork.scss'
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const WebRecentWork = (props) => {
    useEffect(() => {
        AOS.init();
    }, [])
    const slideData = [
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-1.svg',
        },
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-2.svg',
        },
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-1.svg',
        },
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-1.svg',
        },
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-2.svg',
        },
        {
            title: 'Captivating Graphic Design that Tells Your Story',
            para: 'Check how our mobile developers created a custom Airbnb for storage app solution from scratch. Find challenges and features included in this case study.',
            imageSrc: '/images/services/web-recent-1.svg',
        }
    ]

    return (
        <React.Fragment>
            <div className="WebRecentWork">
                <div class="container">
                    <div class="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>{props.head2}<span> {props.spanText}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            autoplay={true}
                            centeredSlides={false}
                            loop={true}
                            slidesPerView={1.4}
                            spaceBetween={10}
                            pagination={true}
                            navigation={true}
                            speed={500}
                            modules={[Pagination, Autoplay, Navigation]}
                            className="swiper_container"
                            breakpoints={{
                                1400: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                },
                                1000: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                600: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10,
                                },
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                    centeredSlides: false,
                                }
                            }}
                        >
                            {slideData.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className="image-wrapper">
                                        <img src={item.imageSrc} alt={item.title} />
                                        <div className="slide-title">
                                            <h2>{item.title}</h2>
                                            <p>{item.para}</p>
                                            <Link to='/'>Read More</Link>
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

export default WebRecentWork