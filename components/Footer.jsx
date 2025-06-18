"use client";
import { useEffect, useRef } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    // Simple fade-in animation without GSAP dependency
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 },
    );

    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <footer
        ref={footerRef}
        className="relative z-10 pt-8 md:pt-16 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company Mission Section */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4 md:space-y-6 text-center md:text-left">
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-gray-300 font-semibold text-base md:text-lg tracking-wide">
                Succeeding Together:
              </h2>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-xl md:text-2xl leading-tight">
                Your Goals, Our Mission
              </h1>
            </div>

            {/* Mission statement */}
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Building lasting partnerships through innovation, integrity, and
              exceptional service.
            </p>

            {/* Social links */}
            <div className="flex space-x-3 md:space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Email"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6">
              Get In Touch
            </h3>

            <div className="space-y-3 md:space-y-4">
              <p className="text-gray-300 text-base md:text-lg">
                We look forward to hearing from you
              </p>

              {/* Website link */}
              <div className="group">
                <a
                  href="https://reach.iroz.in"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 text-base md:text-lg font-medium group-hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">🌐</span>
                  reach.iroz.in
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Phone number */}
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <a
                  href="tel:+919XXXXXXXXX"
                  className="text-gray-300 font-mono text-base md:text-lg hover:text-blue-400 transition-colors"
                >
                  +91 9XXXXXXXXX
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-4 md:mb-6 text-center md:text-left">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 text-center md:text-left">
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1 transform py-1"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1 transform py-1"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1 transform py-1"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-all duration-200 hover:translate-x-1 transform py-1"
              >
                Contact
              </a>
            </div>

            {/* Newsletter signup */}
            <div className="mt-6 md:mt-8">
              <h4 className="text-gray-300 font-medium mb-3 text-center md:text-left">
                Stay Updated
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm md:text-base"
                />
                <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-sm md:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-center sm:text-left">
            {/* Copyright */}
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <p className="text-gray-400 text-sm">
                Iroz © {year} All rights reserved
              </p>
            </div>

            {/* Legal links */}
            <div className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-xs md:text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 py-1"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
