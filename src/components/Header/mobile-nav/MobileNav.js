import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  // Can be null, 'services', a number, or an array containing 'services' and category indices
  const [activeCategory, setActiveCategory] = useState(null);

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      // Reset active category when menu closes
      setActiveCategory(null);
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (index) => {
    // If clicking on 'services', toggle services menu
    if (index === 'services') {
      // If services is being opened, but a category is already open,
      // keep that category open
      setActiveCategory(activeCategory === 'services' ? null : 
        (activeCategory !== null && typeof activeCategory === 'number' ? 
          [activeCategory, 'services'] : 'services'));
    } 
    // If clicking on a category number
    else if (typeof index === 'number') {
      // If services isn't open yet, open both services and this category
      if (activeCategory !== 'services' && !Array.isArray(activeCategory)) {
        setActiveCategory(['services', index]);
      }
      // If services is open, toggle this category
      else {
        // If this category is already open, close it but keep services open
        if (Array.isArray(activeCategory) && activeCategory.includes(index)) {
          const newActive = activeCategory.filter(item => item !== index);
          setActiveCategory(newActive.length === 1 ? newActive[0] : newActive);
        } 
        // Otherwise open this category while keeping services open
        else {
          setActiveCategory(Array.isArray(activeCategory) ? 
            [...activeCategory.filter(item => item !== index), index] : 
            ['services', index]);
        }
      }
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveCategory(null);
  };
  
  // Helper function to check if we need to show the arrow as active
  const isActive = (value) => {
    if (activeCategory === value) return true;
    if (Array.isArray(activeCategory) && activeCategory.includes(value)) return true;
    return false;
  };

  const menuCategories = [
    // {
    //   title: "Web Solutions",
    //   icon: "/images/services/menu1.svg",
    //   items: [
    //     { name: "Website Design & Development", path: "/services/web/website-design-development" },
    //     { name: "Ecommerce Development", path: "/services/web/ecommerce-development" },
    //     { name: "Website Maintenance", path: "/services/web/website-maintenance" },
    //     { name: "Copy Writing", path: "/services/web/copywriting" },
    //   ],
    // },
    // {
    //   title: "Software Solutions",
    //   icon: "/images/services/menu2.svg",
    //   items: [
    //     { name: "Web Applications", path: "/services/software/web-applications" },
    //     { name: "Mobile Applications", path: "/services/software/mobile-applications" },
    //     { name: "API & System Integration", path: "/services/software/api-integration" },
    //     { name: "SaaS Solutions", path: "/services/software/saas-solutions" },
    //     { name: "MVP Solutions", path: "/services/software/mvp-solutions" },
    //     { name: "Maintenance Supply", path: "/services/software/maintenance-supply" },
    //   ],
    // },
    // {
    //   title: "AI Solutions",
    //   icon: "/images/services/menu3.svg",
    //   items: [
    //     { name: "AI Chatbots", path: "/services/artificial-intelligence/ai-chatbots" },
    //     { name: "SaaS AI", path: "/services/artificial-intelligence/saas-ai" },
    //     { name: "AI PoC & MVP", path: "/services/artificial-intelligence/ai-poc-ai-mvp" },
    //   ],
    // },
    // {
    //   title: "Digital Marketing",
    //   icon: "/images/services/menu4.svg",
    //   items: [
    //     { name: "Search Engine Optimization", path: "/services/digital-marketing/seo" },
    //     { name: "Social Media Marketing", path: "/services/digital-marketing/smm" },
    //     { name: "Google Ads or PPC Marketing", path: "/services/digital-marketing/ppc" },
    //     { name: "Online Reputation Management", path: "/services/digital-marketing/reputation" },
    //   ],
    // },
    // {
    //   title: "Branding",
    //   icon: "/images/services/menu5.svg",
    //   items: [
    //     { name: "Brand Identity", path: "/services/branding/identity" },
    //     { name: "Logo Design", path: "/services/branding/logo-design" },
    //     { name: "Printing Materials", path: "/services/branding/printing" },
    //     { name: "Brand Launch", path: "/services/branding/launch" },
    //   ],
    // },
    // {
    //   title: "Hosting Services",
    //   icon: "/images/services/menu6.svg",
    //   items: [
    //     { name: "Domain Registration", path: "/services/hosting/domain-registration" },
    //     { name: "Website Hosting", path: "/services/hosting/website" },
    //     { name: "Email Hosting", path: "/services/hosting/email" },
    //     { name: "Security & SSL", path: "/services/hosting/security" },
    //   ],
    // },
  ];

  return (
    <>
      {/* Mobile header with logo and hamburger */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-black z-50 px-4 py-3 flex justify-between items-center border-b border-gray-800 shadow-lg">
        <Link to="/" className="z-50">
          <img src="/images/logo.jpeg" alt="Logo" className="h-10" />
        </Link>
        <button
          onClick={toggleMenu}
          className="z-50 text-white focus:outline-none w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-900 transition-colors"
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

      {/* Mobile menu overlay with improved animation */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 transform transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto pt-2 pb-24 overscroll-contain">
          {/* Main navigation links */}
          <nav className="px-4 py-2">
            <ul className="space-y-1">
            {/* <li className="py-1">
              <Link
                to="/about"
                className="block px-4 py-3 text-white text-lg font-medium hover:bg-gray-800 rounded-lg transition-colors"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li> */}


            <li>
                <Link
                  to="/about-us"
                  className="flex items-center py-3 px-4 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Servicios
                </Link>
              </li>

              {/* Services navigation with accordion */}
             

              <li>
                {/* <Link
                  to="/portfolio"
                  className="flex items-center py-3 px-4 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Portfolio
                </Link> */}
              </li>

              <li>
                {/* <Link
                  to="/why-quick-growth"
                  className="flex items-center py-3 px-4 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Why Quick Growth
                </Link> */}
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="flex items-center py-3 px-4 text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Manda tu pedido
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact info in mobile menu */}
          <div className="px-6 mt-8">
            <h3 className="text-gray-400 uppercase text-sm font-medium mb-4">Get in touch</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-500/10 mr-3">
                  <img className="w-4 h-4" src="/images/call.svg" alt="Phone" />
                </div>
                <div>
                  <Link
                    to="tel:6622050077"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    6622050077
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
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Outreach@quickgrowth.ai
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-8 px-4">
              <Link
                to="/contact-us"
                className="block text-center w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-[1.02] transition-all shadow-lg"
                onClick={handleLinkClick}
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}