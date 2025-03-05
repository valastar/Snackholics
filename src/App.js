import React, { lazy, Suspense,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/About";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactUs from "./components/ContactUs/ContactUs";
import WebsiteDesignDevelopment from "./components/Services/Web/website-design-development/Index";
import EcommerceDevelopment from "./components/Services/Web/ecommerce-development/Index";
import WebMaintenance from "./components/Services/Web/website-maintenance/Index";
import Copywriting from "./components/Services/Web/copywriting/Index";
import BrandingAgency from "./components/Services/Branding/Index";
import Hoisting from "./components/Services/Hoisting/Index";
import SEO from './components/Services/DigitalMarketing/seo/Index';
import SMM from './components/Services/DigitalMarketing/smm/Index';
import MobileApplications from "./components/Services/Software/MobileApplications/Index";
import WebApplications from "./components/Services/Software/WebApplications/Index";
import SaasSolutions from "./components/Services/Software/SaasSolutions/Index";
import MvpSolutions from "./components/Services/Software/MvpSolutions/Index";
import AiChatbots from "./components/Services/Artificial-Intelligence/AI-Chatbots/Index";
import SaasAiSolution from "./components/Services/Artificial-Intelligence/SaasAi/Index";
import AiPocAiMvp from "./components/Services/Artificial-Intelligence/Ai-poc-Ai-mvp/Index";
import Faqs from './components/Faqs/Index';
import WhyQuickGrowth from "./components/home/WhyQuickGrowth/WhyQuickGrowth";

const Home = lazy(() => import("./components/home/Home"));
const Config = () => {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/services/web/website-design-development" element={<WebsiteDesignDevelopment />} />
          <Route path="/services/web/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/web/website-maintenance" element={<WebMaintenance />} />
          <Route path="/services/web/copywriting" element={<Copywriting />} />
          <Route path="/services/branding" element={<BrandingAgency />} />
          <Route path="/services/hosting" element={<Hoisting />} />
          <Route path="/services/digital-marketing/seo" element={<SEO />} />
          <Route path="/services/digital-marketing/smm" element={<SMM />} />
          <Route path="/services/software/mobile-applications" element={<MobileApplications />} />
          <Route path="/services/software/web-applications" element={<WebApplications />} />
          <Route path="/services/software/saas-solution" element={<SaasSolutions />} />
          <Route path="/services/software/mvp-solution" element={<MvpSolutions />} />
          <Route path="/services/artificial-intelligence/ai-chatbots" element={<AiChatbots />} />
          <Route path="/services/artificial-intelligence/saas-ai-solution" element={<SaasAiSolution />} />
          <Route path="/services/artificial-intelligence/ai-poc-ai-mvp" element={<AiPocAiMvp />} />
          <Route path="/why-quick-growth" element={<WhyQuickGrowth />} />
         

        </Routes>
      </Suspense>
    </Router>
  );
};

export default Config;
