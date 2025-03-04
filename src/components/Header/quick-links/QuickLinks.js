import { Link } from "react-router-dom";

export default function QuickLinks() {
    return (
        <div className="flex items-center">
            <Link
                to="/contact-us"
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
                Let's talk
            </Link>
        </div>
    );
}