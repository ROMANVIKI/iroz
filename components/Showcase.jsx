"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Instagram, Mail, Linkedin } from "lucide-react";
import CEOPic from "../public/assets/images/ceo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const cardRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const el = cardRef.current;

    // Card animation
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

    // Staggered inner elements
    gsap.fromTo(
      elementsRef.current,
      { autoAlpha: 0, y: 30 },
      {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <section className="py-20 bg-white  overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={cardRef}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-8 md:p-12 flex flex-col items-center space-y-6">
            {/* CEO Image */}
            <div ref={(el) => (elementsRef.current[0] = el)}>
              <Image
                src={CEOPic}
                alt="iroz CEO"
                width={250}
                height={250}
                className=" shadow-lg"
              />
            </div>

            {/* Name & Title */}
            <div
              className="text-center"
              ref={(el) => (elementsRef.current[1] = el)}
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-sky-400">
                RAGUNATHAN
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">CEO</p>
            </div>

            {/* Quote */}
            <div ref={(el) => (elementsRef.current[2] = el)}>
              <p className="text-center text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                "Success isn’t about having all the answers — it's about having
                the courage to start, the resilience to learn, and the vision to
                lead. Teach that, and you don’t just build businesses — you
                build entrepreneurs."
              </p>
            </div>

            {/* Social Icons */}
            <div
              className="flex items-center justify-center space-x-6"
              ref={(el) => (elementsRef.current[3] = el)}
            >
              <a
                href="http://www.linkedin.com/in/ragunathan-b-50180222b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ragunathan@example.com"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.instagram.com/rainaragu_official"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
