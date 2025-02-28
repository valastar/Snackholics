import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "../Header.module.scss";

const menuData = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Services",
    subMenu: [
      {
        label: "Artificial Intelligence",
        subMenu: [
          { label: "Custom Chatbot", href: "/services/artificial-intelligence/ai-chatbots" },
          { label: "AI Poc / AI MVP", href: "/services/artificial-intelligence/ai-poc-ai-mvp" },
          { label: "SaaS AI Solution", href: "/services/artificial-intelligence/saas-ai-solution" },
          { label: "Use Case Chatbot Development", href: "/services/artificial-intelligence/chatbot-development" },
          { label: "AI Model Integration", href: "/services/artificial-intelligence/ai-model-integration" },
        ],
      },
      {
        label: "Web",
        subMenu: [
          { label: "Website Design & Development", href: "/services/web/website-design-development" },
          { label: "Ecommerce Development", href: "/services/web/ecommerce-development" },
          { label: "Website Maintenance", href: "/services/web/website-maintenance" },
          { label: "Copy Writing", href: "/services/web/copywriting" },
        ],
      },
      {
        label: "Software",
        subMenu: [
          { label: "Mobile Applications", href: "/services/software/mobile-applications" },
          { label: "Web Applications", href: "/services/software/web-applications" },
          { label: "API & System Integration", href: "/services/software/api-system-integration" },
          { label: "SaaS Solution", href: "/services/software/saas-solution" },
          { label: "MVP Solution", href: "/services/software/mvp-solution" },
          { label: "Maintenance Supply", href: "/services/software/maintenance-supply" },
        ],
      },
      {
        label: "Digital Marketing",
        subMenu: [
          { label: "Search Engine Optimization", href: "/services/digital-marketing/seo" },
          { label: "Social Media Marketing", href: "/services/digital-marketing/smm" },
          { label: "Google Ads or PPC Marketing", href: "/services/digital-marketing/google-adds" },
          { label: "Online Reputation Management", href: "/services/digital-marketing/online-reputation" },
        ],
      },
      {
        label: "Branding",
        subMenu: [
          { label: "Brand Identity", href: "/services/branding" },
          { label: "Logo Design", href: "/services/branding" },
          { label: "Printing Materials", href: "/services/branding" },
          { label: "Brand Launch", href: "/services/branding" },
        ],
      },
      {
        label: "Hosting",
        subMenu: [
          { label: "Domain Registration", href: "/services/hosting" },
          { label: "Website Hosting", href: "/services/hosting" },
          { label: "Email Hosting", href: "/services/hosting" },
          { label: "Security & SSL", href: "/services/hosting" },
        ],
      },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Why Quick Growth", href: "/why-quick-growth" },
  { label: "Contact Us", href: "/contact-us" },
];


export default function MobileNav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const location = useLocation(); // React Router Hook

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar on route change
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]); // Detect route change

  const renderSubMenu = (menu) => {
    const isExpanded = expandedMenus[menu.label] || false;

    const toggleMenu = () => {
      setExpandedMenus((prevState) => ({
        ...prevState,
        [menu.label]: !prevState[menu.label],
      }));
    };

    return menu.subMenu ? (
      <div key={menu.label} className={style.subMenu}>
        <span onClick={toggleMenu}>
          {menu.label}
          <i className={`${style.expandIcon} ${isExpanded ? style.open : ''}`}></i>
        </span>
        {isExpanded && (
          <div className={style.subMenuContent}>
            {menu.subMenu.map((sub) =>
              sub.subMenu ? renderSubMenu(sub) : (
                <Link key={sub.href} to={sub.href}>
                  {sub.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    ) : (
      <Link key={menu.href} to={menu.href}>
        {menu.label}
      </Link>
    );
  };

  return (
    <>
      <div className={style.mobileHeader}>
        <div className="container">
          <div className={style.mobileHeaderPadding}>
            <Link to="/">
              <img
                width={120}
                height={25}
                className={style.mobileLogo}
                src="/images/logo.svg"
                alt="logo"
              />
            </Link>
            <img
              width={30}
              height={30}
              className={style.toggleImg}
              onClick={toggleSidebar}
              src="/images/toggler.svg"
              alt="toggle"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`${style.sidebar} ${isSidebarOpen ? style.active : ""}`}>
        <div className={style.sidebarHeader}>
          <Link to="/">
            <img
              width={120}
              height={25}
              src="/images/logo.svg"
              alt="logo"
            />
          </Link>
          <img src="/images/cross.svg" onClick={toggleSidebar} alt="cross" />
        </div>

        <div className={style.menu}>
          {menuData.map(renderSubMenu)}
        </div>

        <div className={style.socialLinks}>
          <Link to="https://www.facebook.com/" target="_blank">
            <img src="/images/Link.svg" alt="fb" />
          </Link>
          <Link to="https://www.twitter.com/" target="_blank">
            <img src="/images/Link-1.svg" alt="twitter" />
          </Link>
          <Link to="https://www.linkedin.com/company/" target="_blank">
            <img src="/images/Link-2.svg" alt="linkdin" />
          </Link>
          <Link to="https://www.instagram.com/" target="_blank">
           <img src="/images/Link-3.svg" alt="insta" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
           <img src="/images/Link-3.svg" alt="youtube" />
          </Link>
        </div>

        <div className="btn-orange mt-4">
          <Link to="/contact-us">Let's Talk</Link>
        </div>
      </div>

      {/* Overlay for closing the sidebar when clicking outside */}
      {isSidebarOpen && <div className={style.overlay} onClick={toggleSidebar}></div>}
    </>
  );
}
