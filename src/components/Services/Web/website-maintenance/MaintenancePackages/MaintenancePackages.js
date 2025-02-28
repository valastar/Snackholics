import React, { useEffect } from 'react'
import './MaintenancePackages.scss'
import AOS from 'aos';
import { Link } from 'react-router-dom';
function MaintenancePackages() {
    useEffect(() => {
        AOS.init();
    }, []);
    const slideData = [
        {
            title: 'Economy',
            price: '$250',
            imageSrc: '/images/services/package1.svg',
            description: 'Need occasional updates for your website? This is the ideal package to start with.'
        },
        {
            title: 'Business',
            price: '$500',
            imageSrc: '/images/services/package2.svg',
            description: 'For growth stage companies wanting monthly website updates.'
        },
        {
            title: 'Elite',
            price: '$1250',
            imageSrc: '/images/services/package1.svg',
            description: 'For established businesses seeking exponential growth and requiring regular updates.'
        },
        {
            title: 'Enterprise',
            price: '$2400',
            imageSrc: '/images/services/package1.svg',
            description: 'Our all-inclusive package ensuring optimal performance and unlimited updates.'
        },
    ]
    return (
        <React.Fragment>
            <div className="maintenancePackages">
                <div className="container">
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Website Maintenance 
                            <span> Packages</span></h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            {slideData.map((item, index) => (
                                <div className="col-lg-3 col-md-6 mt-4" key={index} data-aos="fade-up" data-aos-duration="1000">
                                    <div className="maintenancePackages__card">
                                    <div className="content">
                                    <div class="d-flex align-items-center">
                                        <div className="flex-shrink-0">
                                        <img src={item.imageSrc} alt="Ecommerce Features" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                        <h3>{item.title}</h3>
                                        <p className='price'>{item.price}</p>
                                        </div>
                                    </div>
                                    <p className='description'>{item.description}</p>
                                    </div>
                                        <div className="btn-center">
                                            <Link to="/" className="btn-custom">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MaintenancePackages
