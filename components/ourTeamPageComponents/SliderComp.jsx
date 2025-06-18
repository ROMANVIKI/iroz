"use client";
import React, { useRef, useState } from "react";

const cardData = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We always act in an honest, exemplary and responsible manner in order to gain and maintain the trust of our customers and partners.",
    color: "from-gray-800 to-gray-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 50 L45 60 L65 40"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="25" r="8" fill="currentColor" />
        <path
          d="M50 33 L50 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "We continuously strive to develop cutting-edge solutions that push the boundaries of technology and create value for our clients.",
    color: "from-blue-800 to-blue-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="45"
          r="15"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M50 20 L50 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 60 L50 70"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M35 35 L35 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M65 35 L65 35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M35 55 L35 55"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M65 55 L65 55"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M42 28 L42 28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M58 28 L58 28"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M42 62 L42 62"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M58 62 L58 62"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="50" cy="45" r="5" fill="currentColor" />
        <path d="M40 75 L60 75 L65 85 L35 85 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.",
    color: "from-purple-800 to-purple-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <path
          d="M50 15 L55 35 L75 35 L60 50 L65 70 L50 60 L35 70 L40 50 L25 35 L45 35 Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="8" fill="rgba(255,255,255,0.3)" />
        <path
          d="M45 45 L50 50 L55 45"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster an environment where diverse perspectives come together to achieve common goals.",
    color: "from-green-800 to-green-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle
          cx="35"
          cy="30"
          r="12"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="65"
          cy="30"
          r="12"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="55"
          r="12"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 42 L35 60 L25 70 L45 70 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <path
          d="M65 42 L65 60 L75 70 L55 70 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <path
          d="M50 67 L50 75 L40 85 L60 85 Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
          fillOpacity="0.7"
        />
        <path
          d="M40 50 L47 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M53 50 L60 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Sustainability",
    description:
      "We are dedicated to creating solutions that not only meet today's needs but also preserve opportunities for future generations.",
    color: "from-teal-800 to-teal-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <path
          d="M50 20 Q35 35 35 50 Q35 65 50 80 Q65 65 65 50 Q65 35 50 20 Z"
          fill="currentColor"
          fillOpacity="0.8"
        />
        <path
          d="M45 25 Q40 30 40 40 Q40 50 45 60"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M55 25 Q60 30 60 40 Q60 50 55 60"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="50" cy="50" r="4" fill="rgba(255,255,255,0.9)" />
        <path
          d="M30 75 Q50 70 70 75 Q60 85 50 85 Q40 85 30 75"
          stroke="currentColor"
          strokeWidth="3"
          fill="currentColor"
          fillOpacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Customer Focus",
    description:
      "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that truly make a difference.",
    color: "from-indigo-800 to-indigo-900",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
        <circle
          cx="50"
          cy="50"
          r="30"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          fill="currentColor"
        />
        <path
          d="M20 50 L30 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M70 50 L80 50"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 20 L50 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M50 70 L50 80"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M65 35 L72 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35 35 L28 28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M65 65 L72 72"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35 65 L28 72"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
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
      }, 4000);
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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Slider Container */}
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        {/* Card Display */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cardData.map((card, index) => (
            <div
              key={card.id}
              className={`min-w-full h-full bg-gradient-to-br ${card.color} flex flex-col justify-center items-start p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden`}
            >
              {/* Advanced Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 sm:top-10 right-4 sm:right-10 w-16 sm:w-32 h-16 sm:h-32 border-2 border-white/30 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 sm:bottom-10 right-8 sm:right-20 w-8 sm:w-20 h-8 sm:h-20 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-2 sm:right-5 w-2 sm:w-4 h-2 sm:h-4 bg-white/30 rounded-full animate-bounce"></div>
                <div className="absolute top-1/4 left-4 sm:left-10 w-6 sm:w-12 h-6 sm:h-12 border border-white/20 rounded-lg rotate-45"></div>

                {/* Geometric shapes */}
                <div className="absolute bottom-1/4 left-8 sm:left-16 w-3 sm:w-6 h-3 sm:h-6 bg-white/20 rounded-full"></div>
                <div className="absolute top-3/4 right-1/4 w-4 sm:w-8 h-4 sm:h-8 border border-white/20 rotate-12"></div>
              </div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 animate-pulse"></div>

              {/* Content */}
              <div className="relative z-10 max-w-full sm:max-w-2xl">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 opacity-90 bg-white/10 backdrop-blur-sm rounded-2xl w-12 sm:w-16 lg:w-24 h-12 sm:h-16 lg:h-24 flex items-center justify-center">
                  {card.id}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-90 font-light max-w-lg">
                  {card.description}
                </p>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex space-x-2 opacity-30">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-6 top-1/2 transform -translate-y-1/2  hover:bg-white/30  text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
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
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2  hover:bg-white/30  text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
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

      {/* Enhanced Pagination Dots */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        {cardData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Modern Control Panel */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        <button
          onClick={toggleAutoplay}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
            isAutoplay
              ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg"
              : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-md"
          }`}
        >
          <span className="flex items-center space-x-2">
            {isAutoplay ? (
              <>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </span>
        </button>

        <div className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg font-medium">
          {currentSlide + 1} / {cardData.length}
        </div>
      </div>

      {/* Modern Progress Bar */}
      {isAutoplay && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-100 ease-linear shadow-sm"
            style={{
              width: `${((currentSlide + 1) / cardData.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
}
