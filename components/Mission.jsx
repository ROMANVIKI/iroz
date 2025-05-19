"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
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
  }, []);

  return (
    <section
      id="mission"
      className="pt-20 pb-20 border-t-4 border-t-indigo-400 border-b-0 border-r-0 border-l-0 bg-white"
    >
      <div
        ref={cardRef}
        className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200"
      >
        <p className="text-sm text-gray-500 mb-2">Our Mission</p>
        <h1 className="text-2xl font-bold mb-4">
          Sequency is more than just Advisory
        </h1>
        <p className="text-gray-700 leading-relaxed">
          As entrepreneurs ourselves, we understand the challenges businesses
          face. Our goal isn’t just to provide solutions but to build true
          partnerships. With a commitment to integrity, excellence, and
          collaboration, we help organisations thrive in today’s ever-evolving
          landscape.
        </p>
      </div>
    </section>
  );
};

export default Mission;
