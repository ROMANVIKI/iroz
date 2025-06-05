"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Settings, ShieldCheck, Handshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefits = [
    {
      title: "Entrepreneurial Experience",
      desc: "Benefit from our extensive experience in entrepreneurship. We know what it takes to be successful.",
      icon: Briefcase,
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
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".benefit-item"),
      { autoAlpha: 0, y: 50 },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="font-sans border-t-4 rounded-lg w-full border-t-indigo-400 pb-10 pt-10"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="font-semibold text-gray-500 text-sm mb-2">
          Our Unique Approach
        </p>
        <h1 className="text-3xl font-bold pb-14">Your Benefits</h1>

        <div className="grid gap-8 max-sm:grid-cols-1 sm:grid-cols-2 max-w-5xl w-full">
          {benefits.map(({ title, desc, icon: Icon }, idx) => (
            <div
              key={idx}
              className="benefit-item flex items-center justify-center space-y-4 p-6 flex-col"
            >
              <div>
                <Icon size={24} color="#3b82f6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold ">{title}</h2>
              </div>
              <div>
                <p className="text-gray-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
