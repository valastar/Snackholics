import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const toggleServicesSubmenu = (e) => {
    e.preventDefault();
    setServicesSubmenuOpen(!servicesSubmenuOpen);
  };

  return (
    <>
      {/* Mobile header with logo and hamburger */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-black z-50 px-4 py-3 flex justify-between items-center border-b border-gray-800">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" className="h-10" />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/90 z-40 transform transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "60px" }}
      >
        <div className="h-full overflow-y-auto pt-4 pb-20">
          <ul className="px-6 py-4">
            <li className="py-3 border-b border-gray-800">
              <Link
                to="/about-us"
                className="text-white text-lg font-medium block"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </li>
            
            <li className="py-3 border-b border-gray-800">
              <button
                onClick={toggleServicesSubmenu}
                className="flex items-center justify-between w-full text-white text-lg font-medium"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform duration-200 ${
                    servicesSubmenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {servicesSubmenuOpen && (
                <div className="mt-3 pl-4 space-y-2">
                  <Link
                    to="/services/web-development"
                    className="text-gray-300 hover:text-yellow-500 block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/services/mobile-apps"
                    className="text-gray-300 hover:text-yellow-500 block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Mobile Applications
                  </Link>
                  <Link
                    to="/services/ai-solutions"
                    className="text-gray-300 hover:text-yellow-500 block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Solutions
                  </Link>
                  {/* Add more services as needed */}
                </div>
              )}
            </li>
            
            <li className="py-3 border-b border-gray-800">
              <Link
                to="/portfolio"
                className="text-white text-lg font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            
            <li className="py-3 border-b border-gray-800">
              <Link
                to="/why-quick-growth"
                className="text-white text-lg font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Why Quick Growth
              </Link>
            </li>
            
            <li className="py-3 border-b border-gray-800">
              <Link
                to="/contact-us"
                className="text-white text-lg font-medium block"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          {/* Contact info in mobile menu */}
          <div className="px-6 mt-6">
            <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Get in touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-500/10 mr-3">
                  <img className="w-4 h-4" src="/images/call.svg" alt="Phone" />
                </div>
                <div>
                  <Link
                    to="tel:+15879196296"
                    className="text-gray-300 hover:text-yellow-500"
                  >
                    +1 587 919 6296
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-500/10 mr-3">
                  <img className="w-4 h-4" src="/images/mail.svg" alt="Email" />
                </div>
                <div>
                  <Link
                    to="mailto:Outreach@quickgrowth.ai"
                    className="text-gray-300 hover:text-yellow-500"
                  >
                    Outreach@quickgrowth.ai
                  </Link>
                </div>
              </div>
            </div>
            
            {/* CTA button */}
            <div className="mt-8">
              <Link
                to="/contact-us"
                className="block text-center w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}