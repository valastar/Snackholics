import style from "./megaMenu.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


const serviceItems = [
  {
    id: 0,
    title: "Artificial Intelligence",
    icon: "/images/services/menu1.svg",
    sections: [
      {
        title: "Artificial Intelligence",
        icon: "/images/services/ai.svg",
        items: [
          { name: "Custom Chatbot", link: "/services/artificial-intelligence/ai-chatbots", img: "/images/services/a1.svg" },
          { name: "AI Poc / AI MVP", link: "/services/artificial-intelligence/ai-poc-ai-mvp", img: "/images/services/a2.svg" },
          { name: "SaaS AI Solution", link: "/services/artificial-intelligence/saas-ai-solution", img: "/images/services/a3.svg" },
          { name: "Uee Case Chatbot Development", link: "/services/artificial-intelligence/chatbot-development", img: "/images/services/a4.svg" },
          { name: "AI Model Integration", link: "/services/artificial-intelligence/ai-model-integration", img: "/images/services/a5.svg" },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "Web",
    icon: "/images/services/menu2.svg",
    sections: [
      {
        title: "Web",
        icon: "/images/services/web.svg",
        items: [
          { name: "Website Design & Development", link: "/services/web/website-design-development", img: "/images/services/b2.svg" },
          { name: "Ecommerce Development", link: "/services/web/ecommerce-development", img: "/images/services/w2.svg" },
          { name: "Website maintenance", link: "/services/web/website-maintenance", img: "/images/services/w2.svg" },
          { name: "Copy writing", link: "/services/web/copywriting", img: "/images/services/w3.svg" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Software",
    icon: "/images/services/menu3.svg",
    sections: [
      {
        title: "Software",
        icon: "/images/services/software.svg",
        items: [
          { name: "Mobile Applications", link: "/services/software/mobile-applications", img: "/images/services/s1.svg" },
          { name: "Web Applications", link: "/services/software/web-applications", img: "/images/services/s2.svg" },
          { name: "API & System Integration", link: "/services/software/api-system-integration", img: "/images/services/s3.svg" },
          { name: "SaaS Solution", link: "/services/software/saas-solution", img: "/images/services/s4.svg" },
          { name: "MVP Solution", link: "/services/software/mvp-solution", img: "/images/services/s5.svg" },
          { name: "Maintenance Supply", link: "/services/software/maintenance-supply",img:"/images/services/s6.svg" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: "/images/services/menu4.svg",
    sections: [
      {
        title: "Digital Marketing",
        icon: "/images/services/dm.svg",
        items: [
          { name: "Search Engine Optimization", link: "/services/digital-marketing/seo", img: "/images/services/d1.svg" },
          { name: "Social Media Marketing", link: "/services/digital-marketing/smm", img: "/images/services/d2.svg" },
          { name: "Google Ads or PPC Marketing", link: "/services/digital-marketing/google-adds", img: "/images/services/d3.svg" },
          { name: "Online Reputation Management", link: "/services/digital-marketing/online-reputation", img: "/images/services/d4.svg" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Branding",
    icon: "/images/services/menu5.svg",
    sections: [
      {
        title: "Branding",
        icon: "/images/services/branding.svg",
        items: [
          { name: "Brand identity", link: "/services/branding", img: "/images/services/b1.svg" },
          { name: "Logo Design", link: "/services/branding", img: "/images/services/b2.svg" },
          { name: "Printing Materials", link: "/services/branding", img: "/images/services/b3.svg" },
          { name: "Brand Launch", link: "/services/branding", img: "/images/services/b4.svg" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Hosting",
    icon: "/images/services/menu6.svg",
    sections: [
      {
        title: "Hosting",
        icon: "/images/services/hosting.svg",
        items: [
          { name: "Domain Registration", link: "/services/hosting", img: "/images/services/h1.svg" },
          { name: "Website Hosting", link: "/services/hosting", img: "/images/services/h2.svg" },
          { name: "Email Hosting", link: "/services/hosting", img: "/images/services/h3.svg" },
          { name: "Security & SSL", link: "/services/hosting", img: "/images/services/h4.svg" },
        ],
      },
    ],
  },
];


export default function ServiceMegaMenu({ onClick }) {
  const [activeId, setActiveId] = useState(0);

  const handleMouseEnter = () => document.body.classList.add("hovered");
  const handleMouseLeave = () => document.body.classList.remove("hovered");

  return (
    <ul className={`list-none ${style.mega_menu_wrapper}`}>
      <div className={`container ${style.containerDiv}`}>
        <span className={style.heading}>What We Do</span>
        {serviceItems.map((service) => (
          <li key={service.id} className="flex">
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={activeId === service.id ? style.active : ""}
              onClick={() => setActiveId(service.id)}
              to="#"
            >
              <span><img src={service.icon} alt={service.title} width={31} height={35} /></span>
              {service.title}
            </Link>
            {activeId === service.id && (
              <div onClick={onClick} className={`flex ${style.mega_sub_menu}`}>
                {service.sections.map((section, index) => (
                  <section key={index}>
                    <span className={style.nav_title}>{section.title}</span>
                    <ul className="list-none">
                      {section.items.map((item, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            to={item.link}
                          >
                            <img src={item.img} alt="img" />
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
                {service.sections.map((section, index) => (
                  <div className={style.img} key={index}>
                    {
                      section.icon && (
                        <img src={section.icon} alt={section.title} />
                      )
                    }
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </div>
    </ul>
  );
}
