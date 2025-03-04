import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import ServiceMegaMenu from "../mega-menu/ServiceMegaMenu";

export default function Navigation({ isSticky }) {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Toggle services menu
  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  };

  return (
    <div className="flex justify-between items-center w-full">
      {/* Left side navigation items */}
      <div className="flex items-center space-x-8">
        <Link to="/">
          <img
            className={`h-14 transition-all duration-300 ${isSticky ? 'h-12' : 'h-14'}`}
            src="/images/logo.svg"
            alt="logo"
          />
        </Link>
        
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <Link
              to="/about-us"
              className="text-white hover:text-yellow-500 py-2 transition-colors duration-300"
            >
              About Us
            </Link>
          </li>
          
          <li className="relative" ref={menuRef}>
            <button
              onClick={toggleServicesMenu}
              className="flex items-center text-white hover:text-yellow-500 py-2 transition-colors duration-300"
            >
              SERVICES
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {servicesMenuOpen && <ServiceMegaMenu onClose={() => setServicesMenuOpen(false)} />}
          </li>
          
          <li>
            <Link
              to="/portfolio"
              className="text-white hover:text-yellow-500 py-2 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          
          <li>
            <Link
              to="/why-quick-growth"
              className="text-white hover:text-yellow-500 py-2 transition-colors duration-300"
            >
              Why Quick Growth
            </Link>
          </li>

          <li>
            <Link
              to="/contact-us"
              className="text-white hover:text-yellow-500 py-2 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      
      {/* Right side CTA button - only visible on desktop */}
      <div className="hidden lg:block">
        <Link 
          to="/contact-us"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition-all duration-300"
        >
          Let's talk
        </Link>
      </div>
    </div>
  );
}