"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
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
      className="pt-20 pb-20 font-sans border-t-4 border-t-indigo-400 border-b-0 border-r-0 border-l-0
        bg-white shadow-lg"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="font-semibold text-gray-500 text-sm mb-2">
          Our Unique Approach
        </p>
        <h1 className="text-3xl font-bold pb-14">Your Benefits</h1>

        <div className="grid gap-8 max-sm:grid-cols-1 sm:grid-cols-2 max-w-5xl w-full">
          {[
            {
              title: "Entrepreneurial Experience",
              desc: "Benefit from our extensive experience in entrepreneurship. We know what it takes to be successful.",
            },
            {
              title: "Bespoke Solutions",
              desc: "We develop solutions designed to meet the specific needs of your business.",
            },
            {
              title: "Swiss Core Values",
              desc: "Our values are at the heart of everything we do, reflecting our commitment to quality and responsibility.",
            },
            {
              title: "Long-Term Partnership",
              desc: "We focus on building lasting relationships based on trust and collaboration.",
            },
          ].map(({ title, desc }, idx) => (
            <div
              key={idx}
              className="benefit-item space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-200 relative"
            >
              <Star
                size={24}
                color="#3b82f6" // Tailwind indigo-500 blue
                className="absolute top-4 left-4"
              />
              <h2 className="text-2xl font-semibold pl-10">{title}</h2>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
