import { Link } from "react-router-dom";
import style from "../Header.module.scss";

import SocialNetworkData from "./SocialNetwork.json"

export default function SocialNetwork() {
    const handleMouseEnter = () => {
        document.body.classList.add('hovered');
    };
    const handleMouseLeave = () => {
        document.body.classList.remove('hovered');
    };
  return (
      <div className={`flex ${style.social_links}`}>
          {SocialNetworkData.map(({ socialIcon, socialLink }, index) => {
              return(
                  <Link
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      key={`social-${index}`}
                      className={`flex justify-center items-center ${style.social}`}
                      to={socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <img width={15} height={16} src={socialIcon} alt={socialIcon} />
                  </Link>
              )
            }
          )}
      </div>
  );
}
