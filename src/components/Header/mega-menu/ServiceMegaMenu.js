import { Link } from "react-router-dom";

export default function ServiceMegaMenu({ onClose }) {
  // Cleaned up menu categories and items
  const menuCategories = [
    {
      title: "Web Solutions",
      icon: "/images/services/menu1.svg",
      items: [
        { name: "Website Design & Development", path: "/services/web/website-design-development" },
        { name: "Ecommerce Development", path: "/services/web/ecommerce-development" },
        { name: "Website Maintenance", path: "/services/web/website-maintenance" },
        { name: "Copy Writing", path: "/services/web/copywriting" },
      ],
    },
    {
      title: "Software Solutions",
      icon: "/images/services/menu2.svg",
      items: [
        { name: "Web Applications", path: "/services/software/web-applications" },
        { name: "Mobile Applications", path: "/services/software/mobile-applications" },
        { name: "API & System Integration", path: "/services/software/api-integration" },
        { name: "SaaS Solutions", path: "/services/software/saas-solutions" },
        { name: "MVP Solutions", path: "/services/software/mvp-solutions" },
        { name: "Maintenance Supply", path: "/services/software/maintenance-supply" },
      ],
    },
    {
      title: "AI Solutions",
      icon: "/images/services/menu3.svg",
      items: [
        { name: "AI Chatbots", path: "/services/artificial-intelligence/ai-chatbots" },
        { name: "SaaS AI", path: "/services/artificial-intelligence/saas-ai" },
        { name: "AI PoC & MVP", path: "/services/artificial-intelligence/ai-poc-ai-mvp" },
      ],
    },
    {
      title: "Digital Marketing",
      icon: "/images/services/menu4.svg",
      items: [
        { name: "Search Engine Optimization", path: "/services/digital-marketing/seo" },
        { name: "Social Media Marketing", path: "/services/digital-marketing/smm" },
        { name: "Google Ads or PPC Marketing", path: "/services/digital-marketing/ppc" },
        { name: "Online Reputation Management", path: "/services/digital-marketing/reputation" },
      ],
    },
    {
      title: "Branding",
      icon: "/images/services/menu5.svg",
      items: [
        { name: "Brand Identity", path: "/services/branding/identity" },
        { name: "Logo Design", path: "/services/branding/logo-design" },
        { name: "Printing Materials", path: "/services/branding/printing" },
        { name: "Brand Launch", path: "/services/branding/launch" },
      ],
    },
    {
      title: "Hosting Services",
      icon: "/images/services/menu6.svg",
      items: [
        { name: "Domain Registration", path: "/services/hosting/domain-registration" },
        { name: "Website Hosting", path: "/services/hosting/website" },
        { name: "Email Hosting", path: "/services/hosting/email" },
        { name: "Security & SSL", path: "/services/hosting/security" },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-black border border-gray-800 rounded shadow-xl z-50">
      {/* Main dropdown menu for desktop */}
      <div className="hidden md:block py-2">
        {menuCategories.map((category, index) => (
          <div key={index} className="relative group">
            <Link 
              to="#"
              className="flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-neutral-800 hover:text-yellow-500"
              onClick={(e) => e.preventDefault()}
            >
              <div className="flex items-center">
                {category.icon && (
                  <img src={category.icon} alt="" className="w-5 h-5 mr-3" />
                )}
                <span>{category.title}</span>
              </div>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {/* Submenu (appears on hover) */}
            <div className="absolute left-full top-0 w-72 bg-black border border-gray-800 rounded shadow-xl hidden group-hover:block">
              <div className="py-2">
                {category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="block px-4 py-2 text-gray-300 hover:bg-neutral-800 hover:text-yellow-500"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        <div className="border-t border-gray-800 mt-2 p-4">
          <p className="text-gray-400 text-sm mb-2">Not sure which service you need?</p>
          <Link
            to="/contact-us"
            className="block w-full text-center py-2 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-medium rounded"
            onClick={onClose}
          >
            Get a free consultation
          </Link>
        </div>
      </div>
      
      {/* Mobile friendly dropdown */}
      <div className="md:hidden py-4 px-6">
        {menuCategories.map((category, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-yellow-500 font-medium mb-2">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 block py-1"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
        <div className="border-t border-gray-800 mt-4 pt-4">
          <p className="text-gray-400 mb-3">Not sure which service you need?</p>
          <Link
            to="/contact-us"
            className="block w-full text-center py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded"
            onClick={onClose}
          >
            Get a free consultation
          </Link>
        </div>
      </div>
    </div>
  );
}