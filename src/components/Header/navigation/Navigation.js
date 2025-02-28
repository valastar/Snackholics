import { Link } from "react-router-dom";
import style from "../Header.module.scss";
import styleMenu from "../mega-menu/megaMenu.module.scss"
import ServiceMegaMenu from "../mega-menu/ServiceMegaMenu";
import {useState} from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default function Navigation() {
    const [isActive, setActive] = useState("false");
    // const [companyActive, setCompanyActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    };
    // const companyToggle = () => {
    //     setCompanyActive(!companyActive);
    // };

    const handleMouseEnter = () => {document.body.classList.add('hovered');};
    const handleMouseLeave = () => {document.body.classList.remove('hovered');};
  return (
      <ul className={`list-none flex ${style.main_menu}`}>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/about-us">
                  About Us
              </Link>
          </li>
          {/* <li className={`relative ${companyActive ? '' : `${styleMenu.menu_active}`}`}>
              <OutsideClickHandler
                  onOutsideClick={() => {
                      setCompanyActive("false");
                  }}
              >
                  <button
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} className={`${style.menuwrap} ${styleMenu.menuwrap}`} onClick={companyToggle}>
                      COMPANY<i className="fa fa-chevron-down"></i>
                  </button>
                  <ul className={`list-none ${style.mini_dropdown} ${styleMenu.mini_dropdown}`} onClick={()=>{setCompanyActive("false")}}>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/company/about-us">About Company</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/company/how-we-are">How We Work</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/company/team">Our Team</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/company/women-empowerment">Women Empowerment</Link></li>
                      <li><Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/company/life-at-digimark">Life @DigiMark</Link></li>
                  </ul>
              </OutsideClickHandler>
          </li> */}
          <li className={isActive ? '' : `${styleMenu.menu_active}`}>
              <OutsideClickHandler
                  onOutsideClick={() => {
                      setActive("false");
                  }}
              >
                  <button
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave} className={`${style.menuwrap} ${styleMenu.menuwrap}`} onClick={handleToggle}>
                      SERVICES <img src="/images/plus.svg" className="ms-2" alt="plus" />
                  </button>
                  <ServiceMegaMenu onClick={()=>{setActive("false")}}/>
              </OutsideClickHandler>
          </li>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/portfolio">
                  Portfolio
              </Link>
          </li>
        <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/why-quick-growth">
                  Why Quick Growth
              </Link>
          </li>
          <li>
          <Link to="/">
            <img className={style.logo} src="/images/logo.svg" width={100} height={100} alt="logo" />
            </Link>
          </li>
          <li>
              <Link
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} to="/contact-us">
                  Contact Us
              </Link>
          </li> 
      </ul>
  );
}
