"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);
  const floatingElementsRef = useRef([]);
  const statsRef = useRef([]);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    // Main content animation
    gsap.from(q(".feature-child"), {
      opacity: 0,
      y: 60,
      stagger: 0.3,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // Floating elements animation
    gsap.to(floatingElementsRef.current, {
      y: -15,
      x: 10,
      rotation: 5,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.7,
    });

    // Counter animation for stats
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        const finalValue = stat.dataset.value;
        gsap.fromTo(
          stat,
          { innerText: 0 },
          {
            innerText: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: function () {
              if (finalValue.includes("+")) {
                stat.innerText = Math.ceil(this.targets()[0].innerText) + "+";
              } else {
                stat.innerText = this.targets()[0].innerText;
              }
            },
          },
        );
      }
    });
  }, []);

  const stats = [
    { value: "3", label: "Years Experience", icon: "🚀" },
    { value: "35", label: "Clients Served", icon: "🤝" },
    { value: "24/7", label: "Support Available", icon: "⏰" },
  ];

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 flex justify-center flex-col items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <div
          ref={(el) => (floatingElementsRef.current[0] = el)}
          className="absolute -top-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-indigo-200/40 to-blue-200/40 blur-3xl"
        />
        <div
          ref={(el) => (floatingElementsRef.current[1] = el)}
          className="absolute -bottom-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-200/40 to-violet-200/40 blur-3xl"
        />
        <div
          ref={(el) => (floatingElementsRef.current[2] = el)}
          className="absolute top-1/2 right-1/4 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-violet-200/30 to-indigo-200/30 blur-2xl"
        />

        {/* Geometric floating shapes */}
        <div
          ref={(el) => (floatingElementsRef.current[3] = el)}
          className="absolute top-20 left-10 w-4 h-4 sm:w-6 sm:h-6 bg-blue-300/60 rounded-full"
        />
        <div
          ref={(el) => (floatingElementsRef.current[4] = el)}
          className="absolute top-1/3 right-20 w-3 h-3 sm:w-5 sm:h-5 bg-indigo-300/60 rotate-45"
        />
        <div
          ref={(el) => (floatingElementsRef.current[5] = el)}
          className="absolute bottom-1/3 left-1/4 w-2 h-2 sm:w-4 sm:h-4 border-2 border-violet-300/60 rounded-full"
        />
      </div>

      {/* Main Content Card */}
      <div className="feature-child relative z-10 text-center max-w-5xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 sm:p-12 lg:p-16 mb-16">
          {/* Mission Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-indigo-700 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-full mb-6 border border-indigo-200/50">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            <span>Our Mission</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Sequency is more than just{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                Advisory
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full opacity-60"></div>
            </span>
          </h1>

          {/* Description */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">
              As entrepreneurs ourselves, we understand the challenges
              businesses face. Our goal isn't just to provide solutions but to
              build{" "}
              <span className="font-semibold text-indigo-600">
                true partnerships
              </span>
              .
            </p>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center space-x-4 py-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"></div>
              <div className="w-8 h-px bg-gradient-to-r from-violet-400 to-transparent"></div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed font-light">
              With a commitment to{" "}
              <span className="font-semibold text-blue-600">integrity</span>,{" "}
              <span className="font-semibold text-indigo-600">excellence</span>,
              and{" "}
              <span className="font-semibold text-violet-600">
                collaboration
              </span>
              , we help organizations thrive in today's ever-evolving landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="feature-child relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl p-8 sm:p-10 rounded-2xl shadow-xl border border-white/20 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-violet-500/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Value */}
                <p
                  ref={(el) => (statsRef.current[index] = el)}
                  data-value={item.value.replace("+", "")}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent mb-3"
                >
                  {item.value.includes("/") ? item.value : "0"}
                </p>

                {/* Label */}
                <p className="text-gray-600 font-medium text-sm sm:text-base lg:text-lg">
                  {item.label}
                </p>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="feature-child relative z-10 mt-16 text-center">
        <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <span>Discover Our Approach</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
    </section>
  );
};

export default Mission;
