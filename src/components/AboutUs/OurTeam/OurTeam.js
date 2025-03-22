import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

function OurTeam() {
  useEffect(() => {
    AOS.init();
  }, [])

  const teamMembers = [
    {
      name: "Cody Legge",
      role: "Co-Founder",
      image: "/images/our-team-1.jpeg",
      social: {
        // facebook: "#",
        // twitter: "#",
        // instagram: "#",
        linkedin: "https://www.linkedin.com/in/codyleggebba/?"
      }
    },
    {
      name: "Kri Hynes",
      role: "SVP of VR & Online Learning",
      image: "/images/our-team-2.jpeg",
      social: {
        // facebook: "#",
        // twitter: "#",
        // instagram: "#",
        linkedin: "https://www.linkedin.com/in/keri-hynes-37875b101/"
      }
    },
    {
      name: "JESSE PAUL",
      role: "Software Engineer & Innovator",
      image: "/images/our-team-3.jpeg",
      social: {
        // facebook: "#",
        // twitter: "#",
        // instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-24">
      <div>
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Our <span className="text-yellow-500">Team</span>
          </h2>
        </div>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              className="col-span-1" 
              data-aos={
                index === 0 ? "fade-right" : 
                index === 1 ? "fade-up" : "fade-left"
              }
              data-aos-duration="1000"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="bg-neutral-900 rounded-2xl overflow-hidden shadow-xl h-full group transform transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Social Media Icons Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center gap-4">
                      <Link to={member.social.facebook} className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110">
                        <img src="/images/aboutUs/social1.svg" alt="Facebook" className="w-5 h-5" />
                      </Link>
                      <Link to={member.social.twitter} className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110">
                        <img src="/images/aboutUs/social2.svg" alt="Twitter" className="w-5 h-5" />
                      </Link>
                      <Link to={member.social.instagram} className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110">
                        <img src="/images/aboutUs/social4.svg" alt="Instagram" className="w-5 h-5" />
                      </Link>
                      <Link to={member.social.linkedin} className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110">
                        <img src="/images/aboutUs/social5.svg" alt="LinkedIn" className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <span className="text-yellow-500 text-lg block mb-4">{member.role}</span>
                  
                  {/* Social Media Icons - Always Visible */}
                  <div className="flex justify-center gap-4 mt-4">
                    {/* <Link to={member.social.facebook} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110" aria-label="Facebook">
                      <img src="/images/aboutUs/social1.svg" alt="Facebook" className="w-5 h-5" />
                    </Link>
                    <Link to={member.social.twitter} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110" aria-label="Twitter">
                      <img src="/images/aboutUs/social2.svg" alt="Twitter" className="w-5 h-5" />
                    </Link>
                    <Link to={member.social.instagram} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110" aria-label="Instagram">
                      <img src="/images/aboutUs/social4.svg" alt="Instagram" className="w-5 h-5" />
                    </Link> */}
                    <Link to={member.social.linkedin} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center transform transition-all duration-300 hover:bg-yellow-500 hover:scale-110" aria-label="LinkedIn">
                      <img src="/images/aboutUs/social5.svg" alt="LinkedIn" className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam