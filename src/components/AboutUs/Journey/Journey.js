import React, { useEffect } from 'react'
import AOS from 'aos';
import { Link } from 'react-router-dom';

function Journey() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    
    <section className="py-20">
      <div className="relative rounded-3xl overflow-hidden shadow-xl" data-aos="fade-right" data-aos-duration="1000">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
          style={{ backgroundImage: "url('/images/aboutUs/journeyBg.svg')" }}
        ></div>
        
        <div className="relative z-10 px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-4xl md:text-5xl font-bold text-[#521212] mb-6">
              Menu
            </h2>
            
            <p className="text-lg text-black/70 mb-10">
             Explota nuestro delicioso menu de snacks
            </p>

            <img
            src= '/images/aboutUs/menusnacks.jpeg'
            alt= "menu"
            className="mx-auto mb-10 rounded-xl shadow-lg max-w-full h-auto"

            />
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact-us" className="flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full transition-all duration-300 hover:bg-black/90 hover:-translate-y-1 sheen">
                Pide tu servicio!
                <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.5061 8.70711C20.8966 8.31658 20.8966 7.68342 20.5061 7.29289L14.1421 0.928932C13.7516 0.538408 13.1184 0.538408 12.7279 0.928932C12.3374 1.31946 12.3374 1.95262 12.7279 2.34315L18.3848 8L12.7279 13.6569C12.3374 14.0474 12.3374 14.6805 12.7279 15.0711C13.1184 15.4616 13.7516 15.4616 14.1421 15.0711L20.5061 8.70711ZM0 9L19.799 9V7L0 7L0 9Z"
                    fill="#fff"
                  />
                </svg>
              </Link>
              
              {/* <Link to="" className="flex items-center gap-2 px-8 py-3 border-2 border-black text-black rounded-full transition-all duration-300 hover:bg-white hover:-translate-y-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M14.7628 19.7514C14.3038 19.7514 13.8418 19.6894 13.3858 19.5644C7.22081 17.8724 2.33979 12.9944 0.646787 6.83344C0.261787 5.43244 0.472738 3.97243 1.24274 2.72443C2.01574 1.47043 3.2868 0.585427 4.7298 0.297427C5.6898 0.105427 6.6388 0.533427 7.1258 1.35443L8.6888 3.99442C9.4478 5.27642 9.0707 6.92742 7.82966 7.75342L6.6988 8.5054C7.7558 10.6754 9.5336 12.4584 11.6946 13.5144L12.4569 12.3774C13.2879 11.1384 14.9388 10.7674 16.2198 11.5304L18.8629 13.1064C19.6809 13.5944 20.1038 14.5494 19.9178 15.4814C19.6298 16.9244 18.7448 18.1954 17.4918 18.9684C16.6498 19.4864 15.7128 19.7514 14.7628 19.7514ZM5.18879 1.74942C5.13979 1.74942 5.08981 1.75444 5.04181 1.76444C3.98781 1.97544 3.07482 2.61042 2.52082 3.51142C1.97182 4.40142 1.82079 5.44043 2.09479 6.43543C3.64779 12.0884 8.12678 16.5654 13.7828 18.1174C14.7788 18.3904 15.8147 18.2384 16.7037 17.6904C17.6037 17.1354 18.2398 16.2214 18.4468 15.1854C18.5088 14.8744 18.3678 14.5554 18.0938 14.3924L15.4517 12.8164C14.8567 12.4624 14.0887 12.6354 13.7027 13.2104L12.5877 14.8754C12.3877 15.1734 12.0018 15.2874 11.6758 15.1494C8.7128 13.9104 6.30183 11.4944 5.06183 8.5204C4.92383 8.1884 5.03969 7.80642 5.33869 7.60742L6.99982 6.50241C7.57582 6.11941 7.75077 5.35242 7.39777 4.75742L5.83478 2.11841C5.69778 1.88641 5.44979 1.74942 5.18879 1.74942Z" fill="black" />
                </svg>
                Contact Us
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey