"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);
    gsap.from(q(".feature-child"), {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section
      id="mission"
      ref={sectionRef}
      className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center flex-col items-center bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-indigo-100 opacity-40 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

      <div className="feature-child text-center max-w-4xl p-6 bg-white rounded-2xl shadow-xl border border-gray-100 backdrop-blur-sm bg-opacity-70 z-10">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-4">
          Our Mission
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Iroz is more than just{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Advisory
          </span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          As entrepreneurs ourselves, we understand the challenges businesses
          face. Our goal isn't just to provide solutions but to build true
          partnerships.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto my-6 rounded-full"></div>
        <p className="text-lg text-gray-600 leading-relaxed">
          With a commitment to integrity, excellence, and collaboration, we help
          organizations thrive in today's ever-evolving landscape.
        </p>
      </div>

      {/* Stats or additional content could go here */}
      <div className="feature-child mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {[
          { value: "3+", label: "Years Experience" },
          { value: "35+", label: "Clients Served" },
          { value: "24/7", label: "Support" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
          >
            <p className="text-3xl font-bold text-indigo-600 mb-2">
              {item.value}
            </p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
