"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurPromise = () => {
  const cardRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const el = cardRef.current;

    // Main card animation
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );

    // Stagger animation for inner elements
    gsap.fromTo(
      elementsRef.current,
      { autoAlpha: 0, y: 30 },
      {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={cardRef} className="max-w-4xl mx-auto relative">
          {/* Main content card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden relative">
            {/* Gradient border at the top */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Card content */}
            <div className="p-12 lg:p-16">
              {/* Badge/Label */}
              <div
                ref={(el) => (elementsRef.current[0] = el)}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 tracking-wide uppercase">
                    Our Promise
                  </span>
                </div>
              </div>

              {/* Main heading */}
              <h1
                ref={(el) => (elementsRef.current[1] = el)}
                className="text-4xl lg:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
              >
                Helping Your Business
                <br />
                <span className="relative">
                  Grow & Thrive
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </span>
              </h1>

              {/* Description */}
              <div
                ref={(el) => (elementsRef.current[2] = el)}
                className="max-w-3xl mx-auto"
              >
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed text-center mb-8">
                  Our services are built on the{" "}
                  <span className="font-semibold text-blue-600">methods</span>,
                  <span className="font-semibold text-purple-600">
                    {" "}
                    techniques
                  </span>
                  , and
                  <span className="font-semibold text-pink-600">
                    {" "}
                    strategies
                  </span>{" "}
                  we have developed, tested, and refined as entrepreneurs.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  With deep expertise across industries and business models, we
                  provide tailored advice to help you overcome challenges and
                  achieve your goals. As your trusted partner, we support you on
                  the path to lasting success.
                </p>
              </div>

              {/* Key features/benefits */}
              <div
                ref={(el) => (elementsRef.current[3] = el)}
                className="grid md:grid-cols-3 gap-8 mt-12"
              >
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Proven Methods
                  </h3>
                  <p className="text-sm text-gray-600">
                    Battle-tested strategies refined through real
                    entrepreneurial experience
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Tailored Advice
                  </h3>
                  <p className="text-sm text-gray-600">
                    Customized solutions designed specifically for your industry
                    and goals
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Trusted Partnership
                  </h3>
                  <p className="text-sm text-gray-600">
                    Long-term support and guidance on your journey to lasting
                    success
                  </p>
                </div>
              </div>

              {/* Call to action */}
              <div
                ref={(el) => (elementsRef.current[4] = el)}
                className="text-center mt-12"
              >
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
                  Start Your Growth Journey
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100/30 to-pink-100/30 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
