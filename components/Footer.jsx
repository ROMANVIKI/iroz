"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 30 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Top border with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <footer
        ref={footerRef}
        className="relative z-10 pt-16 pb-12 px-6 max-w-6xl mx-auto"
      >
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Mission Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-3">
              <h2 className="text-gray-300 font-semibold text-lg tracking-wide">
                Succeeding Together:
              </h2>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-2xl leading-tight">
                Your Goals, Our Mission
              </h1>
            </div>

            {/* Mission statement */}
            <p className="text-gray-400 leading-relaxed">
              Building lasting partnerships through innovation, integrity, and
              exceptional service.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white"
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
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-white font-semibold text-xl mb-6">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg">
                We look forward to hearing from you
              </p>

              {/* Website link */}
              <div className="group">
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-all duration-300 text-lg font-medium group-hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2">🌐</span>
                  reach.iroz.in
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
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
                <p className="text-gray-300 font-mono text-lg">
                  +91 9XXXXXXXXX
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-white font-semibold text-xl mb-6">
              Quick Links
            </h3>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
              >
                Services
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:translate-x-1 transform"
              >
                Contact
              </a>
            </div>

            {/* Newsletter signup */}
            <div className="mt-8">
              <h4 className="text-gray-300 font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <p className="text-gray-400 text-sm">
                Iroz © {year} All rights reserved
              </p>
            </div>

            {/* Legal links */}
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
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
