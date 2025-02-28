import { Link } from "react-router-dom";
import style from "../Header.module.scss";
export default function QuickLinks() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <div className={`flex items-center ${style.career_section}`}>
          <Link to="/contact-us"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="btn-orange">Let’s talk</Link>
      </div>
  );
}
