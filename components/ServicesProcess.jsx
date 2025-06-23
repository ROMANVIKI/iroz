import React, { useState, useEffect, useRef } from "react";

export default function ServicesProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const processSteps = [
    {
      title: "Engaging",
      details: ["Profiling || Problem", "Analysis || Solution", "Proposal"],
    },
    {
      title: "Coordination",
      details: ["Expert & Team Selection ||", "Vision & Scope Definition"],
    },
    {
      title: "Strategy Design",
      details: ["Planning & Architecture"],
    },
    {
      title: "Preparation for Execution",
      details: ["Roadmap & Playbook ||", "Handover to the Customer "],
    },
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        {
          threshold: 0.6,
          rootMargin: "-10% 0px -10% 0px",
        },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-green-600 mb-1">
            Our Services
          </h2>
          <h1 className="text-3xl font-bold text-gray-800">The Process</h1>
        </div>

        {/* Process Journey */}
        <div className="relative">
          {processSteps.map((step, index) => (
            <div key={index} className="relative pb-12 last:pb-0">
              {/* Timeline line segment */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-4 top-8 w-1 h-full transition-all duration-1000 ease-out rounded-full">
                  {index < activeStep ? (
                    <div className="w-full h-full bg-gradient-to-b from-emerald-500 via-blue-500 to-indigo-500 rounded-full shadow-lg"></div>
                  ) : index === activeStep ? (
                    <div className="w-full h-full bg-gradient-to-b from-blue-500 via-emerald-400 to-gray-300 rounded-full animate-pulse shadow-md"></div>
                  ) : (
                    <div className="w-full h-full bg-gray-300 rounded-full"></div>
                  )}
                </div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-2 w-4 h-4 rounded-full transition-all duration-700 ease-out transform">
                {index === activeStep ? (
                  <>
                    {/* Active dot - Emerald with pulsing rings */}
                    <div className="w-full h-full bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-emerald-200 shadow-lg shadow-emerald-500/50 scale-150 transform transition-all duration-500"></div>
                    <div className="absolute -inset-2 rounded-full border-2 border-emerald-300 animate-ping opacity-60"></div>
                    <div className="absolute -inset-1 rounded-full border border-emerald-400 animate-pulse opacity-70"></div>
                    <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse"></div>
                  </>
                ) : index < activeStep ? (
                  <>
                    {/* Completed dot - Blue with glow */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-200 shadow-lg shadow-blue-500/40 scale-125 transform transition-all duration-500"></div>
                    <div className="absolute -inset-1 rounded-full bg-blue-400/20 animate-pulse"></div>
                  </>
                ) : (
                  <>
                    {/* Future dot - Gray */}
                    <div className="w-full h-full bg-gray-400 rounded-full border-2 border-gray-300 shadow-sm transition-all duration-500"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div
                ref={(el) => (stepRefs.current[index] = el)}
                className={`ml-12 transition-all duration-700 ease-out transform ${
                  index === activeStep
                    ? "translate-x-0 opacity-100 scale-105"
                    : index < activeStep
                      ? "translate-x-0 opacity-90 scale-100"
                      : "translate-x-2 opacity-60 scale-95"
                }`}
              >
                {/* Step title */}
                <h3
                  className={`text-xl font-semibold mb-3 transition-all duration-500 ${
                    index === activeStep
                      ? "text-emerald-600 scale-110"
                      : index < activeStep
                        ? "text-blue-600"
                        : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Step details */}
                {step.details.length > 0 && (
                  <div
                    className={`bg-white rounded-lg p-4 border transition-all duration-500 transform ${
                      index === activeStep
                        ? "border-emerald-200 shadow-lg shadow-emerald-100/50 scale-105"
                        : index < activeStep
                          ? "border-blue-200 shadow-md shadow-blue-100/30"
                          : "border-gray-200 shadow-sm"
                    }`}
                  >
                    {step.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-gray-600 text-sm leading-relaxed mb-1 last:mb-0"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Progress indicator */}
        {/* <div className="mt-8 flex justify-center items-center space-x-3"> */}
        {/*   {processSteps.map((_, index) => ( */}
        {/*     <div */}
        {/*       key={index} */}
        {/*       className={`rounded-full transition-all duration-700 transform ${ */}
        {/*         index === activeStep */}
        {/*           ? "w-8 h-3 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-110 shadow-lg shadow-emerald-500/50" */}
        {/*           : index < activeStep */}
        {/*             ? "w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 shadow-md shadow-blue-500/30" */}
        {/*             : "w-2 h-2 bg-gray-300" */}
        {/*       }`} */}
        {/*     ></div> */}
        {/*   ))} */}
        {/* </div> */}
      </div>
    </div>
  );
}
