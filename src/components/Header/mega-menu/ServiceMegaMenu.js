import { Link } from "react-router-dom";

export default function ServiceMegaMenu({ onClose }) {
  // Menu categories and items
  const menuCategories = [
    {
      title: "Web Solutions",
      icon: "/images/web-icon.svg", // Replace with your icon
      items: [
        { name: "Website Design & Development", path: "/services/web/website-design-development" },
        { name: "E-commerce Development", path: "/services/web/ecommerce-development" },
        { name: "Website Maintenance", path: "/services/web/website-maintenance" },
        { name: "Copywriting", path: "/services/web/copywriting" },
      ],
    },
    {
      title: "Software Solutions",
      icon: "/images/software-icon.svg", // Replace with your icon
      items: [
        { name: "Web Applications", path: "/services/software/web-applications" },
        { name: "Mobile Applications", path: "/services/software/mobile-applications" },
        { name: "SaaS Solutions", path: "/services/software/saas-solutions" },
        { name: "MVP Solutions", path: "/services/software/mvp-solutions" },
      ],
    },
    {
      title: "AI Solutions",
      icon: "/images/ai-icon.svg", // Replace with your icon
      items: [
        { name: "AI Chatbots", path: "/services/artificial-intelligence/ai-chatbots" },
        { name: "SaaS AI", path: "/services/artificial-intelligence/saas-ai" },
        { name: "AI PoC & MVP", path: "/services/artificial-intelligence/ai-poc-ai-mvp" },
      ],
    },
    {
      title: "Marketing Solutions",
      icon: "/images/marketing-icon.svg", // Replace with your icon
      items: [
        { name: "SEO", path: "/services/digital-marketing/seo" },
        { name: "Social Media Marketing", path: "/services/digital-marketing/smm" },
        { name: "Branding", path: "/services/branding" },
        { name: "Hosting Services", path: "/services/hosting" },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-0 mt-1 w-64 md:w-auto bg-black border border-gray-800 shadow-xl z-50">
      {/* Desktop mega menu */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {menuCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <div className="flex items-center space-x-3">
              {category.icon && (
                <img src={category.icon} alt={category.title} className="w-5 h-5" />
              )}
              <h3 className="text-yellow-500 font-medium">{category.title}</h3>
            </div>
            
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
      </div>
      
      {/* Bottom CTA section */}
      <div className="p-4 bg-gray-900 border-t border-gray-800">
        <p className="text-gray-400 text-sm mb-2">Not sure which service you need?</p>
        <Link
          to="/contact-us"
          className="block text-center w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded transition-all duration-300"
          onClick={onClose}
        >
          Get a free consultation
        </Link>
      </div>
    </div>
  );
}