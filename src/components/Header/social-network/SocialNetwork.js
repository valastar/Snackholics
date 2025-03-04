import { Link } from "react-router-dom";
import SocialNetworkData from "./SocialNetwork.json";

export default function SocialNetwork() {
  return (
    <div className="flex items-center space-x-2">
      {SocialNetworkData.map(({ socialIcon, socialLink }, index) => (
        <a
          key={`social-${index}`}
          className="flex justify-center items-center w-8 h-8 rounded-full bg-gray-800 hover:bg-yellow-500/20 transition-all duration-300"
          href={socialLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-4 h-4" src={socialIcon} alt="Social Icon" />
        </a>
      ))}
    </div>
  );
}