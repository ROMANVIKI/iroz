"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import SliderComp from "../components/SliderComp.jsx";

const HeroSection = () => {
  const linesRef = useRef([]);
  const containerRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Main content animation
    gsap.from(linesRef.current, {
      opacity: 0,
      y: 60,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
    });

    // Floating elements animation
    gsap.to(floatingElementsRef.current, {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
    });

    // Background gradient animation
    // gsap.to(containerRef.current, {
    //   backgroundPosition: "200% center",
    //   duration: 8,
    //   ease: "none",
    //   repeat: -1,
    // });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col pt-6 pb-20 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <SliderComp />
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none"> */}
      {/* Floating geometric shapes */}
      {/*   <div */}
      {/*     ref={(el) => (floatingElementsRef.current[0] = el)} */}
      {/*     className="absolute top-20 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-200 rounded-full opacity-60" */}
      {/*   /> */}
      {/*   <div */}
      {/*     ref={(el) => (floatingElementsRef.current[1] = el)} */}
      {/*     className="absolute top-40 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-violet-200 rotate-45 opacity-70" */}
      {/*   /> */}
      {/*   <div */}
      {/*     ref={(el) => (floatingElementsRef.current[2] = el)} */}
      {/*     className="absolute bottom-32 left-20 w-5 h-5 sm:w-8 sm:h-8 border-2 border-indigo-200 rounded-full opacity-50" */}
      {/*   /> */}
      {/*   <div */}
      {/*     ref={(el) => (floatingElementsRef.current[3] = el)} */}
      {/*     className="absolute bottom-20 right-10 w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-200 to-violet-200 rounded-lg rotate-12 opacity-40" */}
      {/*   /> */}
      {/* Gradient orbs */}
      {/* <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-300/20 to-violet-300/20 rounded-full blur-3xl animate-pulse" /> */}
      {/* <div */}
      {/*   className="absolute bottom-1/3 right-1/3 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 rounded-full blur-2xl animate-pulse" */}
      {/*   style={{ animationDelay: "1s" }} */}
      {/* /> */}
      {/* </div> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center items-center text-center space-y-4 sm:space-y-8 lg:space-y-12 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <h1
              ref={(el) => (linesRef.current[0] = el)}
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent leading-tight"
            >
              Moving Forward
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            {/* Decorative line */}
            <div
              ref={(el) => (linesRef.current[1] = el)}
              className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full"
            />
          </div>

          {/* Subtitle */}
          <h2
            ref={(el) => (linesRef.current[2] = el)}
            className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 font-medium leading-relaxed max-w-3xl"
          >
            Advisory Services for Entrepreneurs by{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold text-sky-600">
                Entrepreneurs
              </span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-sky-200 -z-10 rounded-sm opacity-60"></span>
            </span>
          </h2>

          {/* Description */}
          <p
            ref={(el) => (linesRef.current[3] = el)}
            className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl font-light"
          >
            We are your trusted partner in business success, offering
            comprehensive strategy, corporate and fiduciary services designed to
            drive your business forward in today's competitive landscape.
          </p>

          {/* CTA Buttons */}
          {/* <div */}
          {/*   ref={(el) => (linesRef.current[4] = el)} */}
          {/*   className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6" */}
          {/* > */}
          {/*   <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"> */}
          {/*     <span className="flex items-center justify-center space-x-2"> */}
          {/*       <span>Get Started</span> */}
          {/*       <svg */}
          {/*         className="w-4 h-4 group-hover:translate-x-1 transition-transform" */}
          {/*         fill="none" */}
          {/*         stroke="currentColor" */}
          {/*         viewBox="0 0 24 24" */}
          {/*       > */}
          {/*         <path */}
          {/*           strokeLinecap="round" */}
          {/*           strokeLinejoin="round" */}
          {/*           strokeWidth={2} */}
          {/*           d="M13 7l5 5m0 0l-5 5m5-5H6" */}
          {/*         /> */}
          {/*       </svg> */}
          {/*     </span> */}
          {/*   </button> */}
          {/**/}
          {/*   <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"> */}
          {/*     Learn More */}
          {/*   </button> */}
          {/* </div> */}

          {/* Hero Image/Icon */}
          <div
            ref={(el) => (linesRef.current[5] = el)}
            className="relative pt-6 sm:pt-8"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>

              {/* Main image container */}
              <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-6 sm:p-8 shadow-xl">
                <Image
                  src="/assets/images/career.svg"
                  alt="Career Growth"
                  width={120}
                  height={120}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-30 xl:h-30 mx-auto filter hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Floating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping opacity-30"></div>
              <div
                className="absolute inset-0 rounded-full border border-violet-200 animate-pulse opacity-40"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            ref={(el) => (linesRef.current[6] = el)}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-8 sm:pt-12 text-sm text-gray-500"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Trusted by 35+ Entrepreneurs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span>95% Success Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> */}
      {/*   <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"> */}
      {/*     <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div> */}
      {/*   </div> */}
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
