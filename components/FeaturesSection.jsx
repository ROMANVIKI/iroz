"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Strategic Business Advisory",
    description:
      "Increase your success by supporting the development and implementation of your global strategy.",
    img: "/assets/images/img1.png",
  },
  {
    title: "Marketing & Branding",
    description:
      "Build a distinctive brand and connect with your target audience.",
    img: "/assets/images/img2.png",
  },
  {
    title: "Corporate Services",
    description:
      "The security and reliability you need to run your business with confidence.",
    img: "/assets/images/img3.png",
  },
];

const FeaturesSection = () => {
  const featureRefs = useRef([]);

  useEffect(() => {
    featureRefs.current.forEach((ref) => {
      const q = gsap.utils.selector(ref);

      gsap.from(q(".feature-child"), {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      id="feature-section"
      className="pt-12 pb-10 border-t-4 border-t-indigo-400"
    >
      <div className="flex max-md:flex-col max-md:space-y-12 md:space-x-8 items-center justify-center px-4">
        {features.map((item, i) => (
          <div
            key={i}
            ref={(el) => (featureRefs.current[i] = el)}
            className="text-center pt-4 w-full max-w-sm"
          >
            <div className="feature-child flex justify-center">
              <Image src={item.img} alt={item.title} width={250} height={250} />
            </div>

            <div className="space-y-4 px-2 mt-4">
              <h1 className="feature-child text-xl font-semibold text-blue-600 dark:text-sky-400">
                {item.title}
              </h1>

              <p className="feature-child text-gray-600 leading-relaxed">
                {item.description}
              </p>

              <div className="feature-child">
                <Button name={"Learn More"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
