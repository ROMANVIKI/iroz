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
    <footer
      ref={footerRef}
      className="bg-white border-t border-gray-300 pt-10 pb-8 px-6 max-w-6xl mx-auto
        flex flex-col max-sm:space-y-6 sm:flex-row sm:justify-between sm:items-center
        text-center sm:text-left gap-4"
    >
      <div className="space-y-2">
        <h1 className="text-gray-500 font-semibold">Succeeding Together:</h1>
        <h1 className="text-blue-600 font-bold">Your Goals, Our Mission</h1>
      </div>
      <div className="space-y-2">
        <p className="text-gray-700">We look forward to hearing from you</p>
        <a
          href="#"
          className="text-blue-600 hover:underline after:content-['_↗'] after:ml-1 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          reach.iroz.in
        </a>
        <p className="mt-4 text-gray-700 font-mono text-sm">+91 9XXXXXXXXX</p>
      </div>
      <p className="text-gray-500 text-sm mt-4 sm:mt-0">
        Iroz © {year} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
