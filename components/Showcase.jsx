"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CEOPic from "../public/assets/images/ceo.jpeg";
import { Instagram, Mail, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
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
    <div
      ref={sectionRef}
      className="p-4 flex justify-center flex-col space-y-4"
    >
      <div className="flex justify-center items-center feature-child">
        <Image src={CEOPic} alt="iroz C E O" width={250} height={250} />
      </div>

      <div className="text-center feature-child">
        <h1 className="text-lg text-blue-600 dark:text-sky-400">RAGUNATHAN</h1>
        <p className="">CEO</p>
      </div>

      <div className="text-center feature-child">
        <p className="text-gray-600">
          "Success isn’t about having all the answers—it's about having the
          courage to start, the resilience to learn, and the vision to lead.
          Teach that, and you don’t just build businesses—you build
          entrepreneurs."
        </p>
      </div>

      <div className="flex space-x-8 items-center p-4 justify-center feature-child">
        <a href="http://www.linkedin.com/in/ragunathan-b-50180222b">
          <Linkedin className="text-gray-600 hover:text-blue-600" />
        </a>
        <Mail className="text-gray-600 hover:text-blue-600" />
        <a
          href="https://www.instagram.com/rainaragu_official"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="text-gray-600 hover:text-blue-600" />
        </a>
      </div>
    </div>
  );
};

export default Showcase;
