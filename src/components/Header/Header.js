import { useEffect, useState } from "react";
import TopStrip from "./top-strip/TopStrip";
import MobileNav from "./mobile-nav/MobileNav";
import Navigation from "./navigation/Navigation";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* Top strip with contact info and social links */}
      <TopStrip />
      
      {/* Main navigation */}
      <div 
        className={`w-full transition-all duration-300 z-50 ${
          isSticky 
            ? "fixed top-0 bg-black/90 backdrop-blur-md shadow-lg" 
            : "relative bg-black"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="py-4">
            <Navigation isSticky={isSticky} />
          </div>
        </div>
      </div>
      
      {/* Mobile navigation - only visible on smaller screens */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
}

export default Header;