"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import NotificationLine from "./NotificationLine";

const HeroSection = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    gsap.from(linesRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.3, // Animate each line one after the other
    });
  }, []);

  return (
    <section className="min-h-screen w-full font-sans flex items-center justify-center ">
      <div className="container px-2 flex flex-col justify-center items-center  text-center space-y-10">
        <h1
          ref={(el) => (linesRef.current[0] = el)}
          className="text-3xl bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent"
        >
          Moving Forward Together
        </h1>

        <h1
          ref={(el) => (linesRef.current[1] = el)}
          className="text-xl text-gray-700"
        >
          Advisory Services for Entrepreneurs by{" "}
          <span className="underline decoration-sky-500">Entrepreneurs</span>
        </h1>

        <p
          ref={(el) => (linesRef.current[2] = el)}
          className="max-w-xl text-gray-600"
        >
          We are trusted partner in business success, offering strategy,
          corporate and fiduciary services to drive your business forward.
        </p>

        <div ref={(el) => (linesRef.current[3] = el)}>
          <Image
            src="/assets/images/career.svg"
            alt="career"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
