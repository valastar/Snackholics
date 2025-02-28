import React, { useRef, useEffect } from 'react';
import './ClientSays.scss';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

function ClientSays() {
    useEffect(() => {
        AOS.init();
    }, []);

    const slideData = [
        {
            imageSrc: '/images/home/client1.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        {
            imageSrc: '/images/home/client2.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        {
            imageSrc: '/images/home/client3.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        {
            imageSrc: '/images/home/client1.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        {
            imageSrc: '/images/home/client2.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        {
            imageSrc: '/images/home/client3.svg',
            description: 'Partnering with Quick Growth has been a game-changer for our business. Their team developed a custom AI-driven chatbot that improved our customer engagement significantly. Within just three months, we saw a 40% reduction in response times and a 25% increase in customer satisfaction scores.',
            name: 'Sarah John',
            job: 'Global Accountability Officer',
        },
        
    ]

    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <React.Fragment>
            <div className="clientSays">
                <div className="container">
                    <div className="row">
                        <div className="title" data-aos="fade-up" data-aos-duration="1000">
                            <h2>Client <span>Says</span></h2>
                        </div>
                        <Swiper
                            ref={swiperRef}
                            autoplay={false}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={3}
                            spaceBetween={10}
                            navigation={false}
                            speed={500}
                            modules={[Navigation, Autoplay]}
                            className="swiper_container"
                            breakpoints={{
                                1400: { slidesPerView: 3, spaceBetween: 10 },
                                1000: { slidesPerView: 3, spaceBetween: 10 },
                                600: { slidesPerView: 3, spaceBetween: 10 },
                                0: { slidesPerView: 1, spaceBetween: 10 },
                            }}
                        >
                            {slideData.map((item, index) => (
                                <SwiperSlide key={index} className="swiper-slide">
                                    <div className="swiper-content">
                                        <img src={item.imageSrc} alt={item.title} />
                                        <div className="content">
                                            <p className="slide-description">{item.description}</p>
                                            <h2 className="slide-name">{item.name}</h2>
                                            <span className="slide-job">{item.job}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="custom-nav-buttons" data-aos="fade-up" data-aos-duration="1000">
                            <button className="custom-prev" onClick={handlePrev}><img src="/images/home/arrowLeft.svg" alt="arrow" /> Previous</button>
                            <button className="custom-next" onClick={handleNext}>Next <img src="/images/home/arrowRight.svg" alt="arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ClientSays;
