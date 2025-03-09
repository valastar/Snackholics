import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Import essential components
import ServicePage from "./components/Services/ServicePage";
import WhyQuickGrowth from "./components/home/WhyQuickGrowth/WhyQuickGrowth";

// Lazy load other pages
const Home = lazy(() => import("./components/home/Home"));
const AboutUs = lazy(() => import("./components/AboutUs/About"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const Faqs = lazy(() => import("./components/Faqs/Index"));

// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/why-quick-growth" element={<WhyQuickGrowth />} />
          
          {/* Services - Web */}
          <Route path="/services/web/:servicePath" element={<ServicePage />} />
          
          {/* Services - Branding */}
          <Route path="/services/branding/:servicePath" element={<ServicePage />} />
          
          {/* Services - Hosting */}
          <Route path="/services/hosting/:servicePath" element={<ServicePage />} />
          
          {/* Services - Digital Marketing */}
          <Route path="/services/digital-marketing/:servicePath" element={<ServicePage />} />
          
          {/* Services - Software */}
          <Route path="/services/software/:servicePath" element={<ServicePage />} />
          
          {/* Services - Artificial Intelligence */}
          <Route path="/services/artificial-intelligence/:servicePath" element={<ServicePage />} />
          
          {/* Legacy support - catch-all for services */}
          <Route path="/services/:category/:servicePath" element={<ServicePage />} />
          
          {/* 404 - Not Found */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
              <h1 className="text-6xl font-bold mb-6">404</h1>
              <p className="text-2xl mb-8">Page not found</p>
              <a href="/" className="px-6 py-3 bg-yellow-500 text-black font-medium rounded-full hover:bg-yellow-600 transition duration-300">
                Return Home
              </a>
            </div>
          </div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;