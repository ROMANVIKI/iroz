"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Strategy",
    description:
      "Increase your success by supporting the development and implementation of your global strategy with data-driven insights and proven methodologies.",
    img: "/assets/images/img1.png",
    gradient: "from-blue-500 to-indigo-600",
    icon: "📊",
    benefits: ["Market Analysis", "Growth Planning", "Risk Assessment"],
  },
  {
    title: "Marketing & Branding",
    description:
      "Build a distinctive brand identity and connect meaningfully with your target audience across all digital and traditional channels.",
    img: "/assets/images/img2.png",
    gradient: "from-violet-500 to-purple-600",
    icon: "🎯",
    benefits: ["Brand Identity", "Digital Marketing", "Content Strategy"],
  },
  {
    title: "Corporate Services",
    description:
      "The security, compliance, and operational reliability you need to run your business with complete confidence and peace of mind.",
    img: "/assets/images/img3.png",
    gradient: "from-emerald-500 to-teal-600",
    icon: "🏢",
    benefits: [
      "Legal Compliance",
      "Financial Management",
      "Operational Support",
    ],
  },
];

const FeaturesSection = () => {
  const featureRefs = useRef([]);
  const sectionRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    // Floating background elements
    gsap.to(floatingElementsRef.current, {
      y: -20,
      x: 15,
      rotation: 10,
      duration: 6,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 1,
    });

    // Feature cards animation
    featureRefs.current.forEach((ref, index) => {
      if (ref) {
        const q = gsap.utils.selector(ref);

        gsap.from(q(".feature-child"), {
          opacity: 0,
          y: 80,
          scale: 0.9,
          stagger: 0.15,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        // Hover animations
        const card = ref.querySelector(".feature-card");
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      }
    });
  }, []);

  return (
    <section
      id="feature-section"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-slate-100 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={(el) => (floatingElementsRef.current[0] = el)}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl"
        />
        <div
          ref={(el) => (floatingElementsRef.current[1] = el)}
          className="absolute top-1/2 right-20 w-24 h-24 bg-violet-200/30 rounded-full blur-xl"
        />
        <div
          ref={(el) => (floatingElementsRef.current[2] = el)}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-500"></div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-16 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-gray-200/50 shadow-lg">
          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full animate-pulse"></span>
          <span>Our Services</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Solutions for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            Business Growth
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Empowering your business with strategic insights, creative solutions,
          and reliable support tailored to your unique needs and aspirations.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {features.map((item, i) => (
              <div
                key={i}
                ref={(el) => (featureRefs.current[i] = el)}
                className="group"
              >
                <div className="feature-card relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  {/* Header Section */}
                  <div className="relative p-8 sm:p-10">
                    {/* Icon Badge */}
                    <div className="feature-child flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    </div>

                    {/* Image */}
                    <div className="feature-child flex justify-center mb-8">
                      <div className="relative group-hover:scale-105 transition-transform duration-500">
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={280}
                          height={280}
                          className="w-full max-w-[200px] sm:max-w-[250px] h-auto object-contain filter group-hover:drop-shadow-xl transition-all duration-500"
                        />
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-6">
                      {/* Title */}
                      <h3
                        className={`feature-child text-2xl sm:text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="feature-child text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.description}
                      </p>

                      {/* Benefits List */}
                      <div className="feature-child space-y-3">
                        {item.benefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-center space-x-2 text-sm text-gray-500"
                          >
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full`}
                            ></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="feature-child pt-4">
                        <button
                          className={`group/btn inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                        >
                          <span>Learn More</span>
                          <svg
                            className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div
                    className={`h-1 bg-gradient-to-r ${item.gradient}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative z-10 text-center mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Let's discuss how our comprehensive services can drive your success
            forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
