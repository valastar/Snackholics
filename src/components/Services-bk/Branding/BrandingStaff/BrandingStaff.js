import React, { useEffect } from 'react'
import './BrandingStaff.scss'
import AOS from 'aos';
function BrandingStaff() {
    useEffect(() => {
        AOS.init();
    }, []);
    const projects = [
        {
          title: 'Adam Miller',
          tag: '/CEO',
          image: '/images/services/staff1.svg',
        },
        {
          title: 'Dan Washington',
          tag: '/ Programmer',
          image: '/images/services/staff2.svg',
        },
        {
          title: 'Sam Peterson',
          tag: '/ UI/UX desiger',
          image: '/images/services/staff3.svg',
        },
        {
            title: 'Andrew Dowson',
            tag: '/ HR specialist',
            image: '/images/services/staff4.svg',
          }        
      ];
    return (
        <React.Fragment>
            <div className="brandingStaff">
                <div className="container">
                    <div className="team">
                        <p>Team</p>
                    </div>
                    <div className="title" data-aos="fade-up" data-aos-duration="1000">
                        <h2>Meet Our
                        <span> Creative Staff</span></h2>
                        <img src="/images/services/24Member.svg" alt="24Member" />
                    </div>
                    <div className="row">
                    {projects.map((project, index) => (
                    <div className="col-md-3" key={index}>
                    <div
                        className="blockCards"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="block">
                        <div className="imgWrapper">
                        <img src={project.image} alt={project.title} />
                        </div>
                        <p className='tag'>{project.tag}</p>
                        <p className="heading">{project.title}</p>
                        </div>
                    </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BrandingStaff
