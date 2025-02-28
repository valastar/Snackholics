import { Link } from "react-router-dom";
import style from "../Header.module.scss";


export default function TopStripInfo() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <ul className={`list-none flex-between-center ${style.contact_section}`}>
        <li className="flex items-center">
          <img width={43} height={43}
              src="/images/call.svg"
              alt="contactUs"
          />
          <section className="flex direction-column">
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="tel:+15879196296"
            >+15879196296</Link>
          </section>
        </li>
        <li className="flex items-center">
          <img width={43} height={43} src="/images/mail.svg" alt="question" />
          <section className="flex direction-column">
            <Link
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                href="mailto:Outreach@quickgrowth.ai"
            >
              Outreach@quickgrowth.ai
            </Link>
          </section>
        </li>
      </ul>
  );
}
