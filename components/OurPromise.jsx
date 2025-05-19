"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurPromise = () => {
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
    <div
      ref={cardRef}
      className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-300
      pt-20 pb-20 border-t-4 border-t-gray-400 border-b-0 border-r-0 border-l-0
      flex flex-col space-y-4 text-left"
    >
      <p className="text-sm text-gray-500">Our Promise</p>
      <h1 className="text-2xl font-bold">Helping Your Business Grow</h1>
      <p className="text-gray-700 leading-relaxed">
        Our services are built on the methods, techniques, and strategies we
        have developed, tested, and refined as entrepreneurs. With deep
        expertise across industries and business models, we provide tailored
        advice to help you overcome challenges and achieve your goals. As your
        trusted partner, we support you on the path to lasting success.
      </p>
    </div>
  );
};

export default OurPromise;
