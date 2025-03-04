import { Link } from "react-router-dom";

export default function TopStripInfo() {
  return (
    <ul className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
      <li className="flex items-center group">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-500/10 mr-3">
          <img
            className="w-5 h-5"
            src="/images/call.svg"
            alt="Phone"
          />
        </div>
        <div>
          <Link
            to="tel:+15879196296"
            className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
          >
            +1 587 919 6296
          </Link>
        </div>
      </li>
      
      <li className="flex items-center group">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-yellow-500/10 mr-3">
          <img
            className="w-5 h-5"
            src="/images/mail.svg"
            alt="Email"
          />
        </div>
        <div>
          <Link
            to="mailto:Outreach@quickgrowth.ai"
            className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
          >
            Outreach@quickgrowth.ai
          </Link>
        </div>
      </li>
    </ul>
  );
}