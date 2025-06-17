"use client";
import React, { useRef, useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We always act in an honest, exemplary and responsible manner in order to gain and maintain the trust of our customers and partners.",
    color: "from-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "We continuously strive to develop cutting-edge solutions that push the boundaries of technology and create value for our clients.",
    color: "from-blue-800 to-blue-900",
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.",
    color: "from-purple-800 to-purple-900",
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster an environment where diverse perspectives come together to achieve common goals.",
    color: "from-green-800 to-green-900",
  },
  {
    id: 5,
    title: "Sustainability",
    description:
      "We are dedicated to creating solutions that not only meet today's needs but also preserve opportunities for future generations.",
    color: "from-teal-800 to-teal-900",
  },
  {
    id: 6,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that truly make a difference.",
    color: "from-indigo-800 to-indigo-900",
  },
];

export default function SliderComp() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  React.useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % cardData.length);
      }, 3000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoplay]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cardData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6">
      {/* Main Slider Container */}
      <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
        {/* Card Display */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`min-w-full h-full bg-gradient-to-br ${card.color} flex flex-col justify-center items-start p-12 text-white relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-10 right-20 w-20 h-20 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-5 w-4 h-4 bg-white/20 rounded-full"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-2xl">
                <div className="text-6xl font-bold mb-6 opacity-90">
                  {card.id}.
                </div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">
                  {card.title}
                </h2>
                <p className="text-lg leading-relaxed opacity-90 font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-gray-800 scale-125"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          onClick={toggleAutoplay}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            isAutoplay
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {isAutoplay ? "Pause" : "Play"} Auto-slide
        </button>

        <div className="text-sm text-gray-600">
          {currentSlide + 1} / {cardData.length}
        </div>
      </div>

      {/* Progress Bar */}
      {isAutoplay && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
          <div
            className="h-full bg-gray-800 rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((currentSlide + 1) / cardData.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
