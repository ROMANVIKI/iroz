"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Settings, ShieldCheck, Handshake, BicepsFlexed } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefits = [
    {
      title: "Entrepreneurial Experience",
      desc: "Benefit from our extensive experience in entrepreneurship. We know what it takes to be successful.",
      icon: BicepsFlexed,
    },
    {
      title: "Bespoke Solutions",
      desc: "We develop solutions designed to meet the specific needs of your business.",
      icon: Settings,
    },
    {
      title: "Swiss Core Values",
      desc: "Our values are at the heart of everything we do, reflecting our commitment to quality and responsibility.",
      icon: ShieldCheck,
    },
    {
      title: "Long-Term Partnership",
      desc: "We focus on building lasting relationships based on trust and collaboration.",
      icon: Handshake,
    },
  ];

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
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="p-4 flex justify-center flex-col items-center space-y-6"
    >
      <div className="text-center feature-child">
        <p className="font-semibold text-gray-500 text-sm">
          Our Unique Approach
        </p>
        <h1 className="text-3xl font-bold text-blue-600 dark:text-sky-400">
          Your Benefits
        </h1>
      </div>

      {benefits.map(({ title, desc, icon: Icon }, idx) => (
        <div
          key={idx}
          className="feature-child text-center flex flex-col items-center space-y-3 p-4"
        >
          <Icon size={32} className="text-blue-600" />
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 max-w-xl">{desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
