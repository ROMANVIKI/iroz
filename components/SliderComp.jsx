"use client";
import React, { useRef, useState } from "react";

const imageData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    alt: "Image 1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=1200&h=600&fit=crop",
    alt: "Image 2",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=1200&h=600&fit=crop",
    alt: "Image 3",
  },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  React.useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % imageData.length);
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
    setCurrentSlide((prev) => (prev + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  const toggleAutoplay = () => {
    setIsAutoplay(!isAutoplay);
  };

  return (
    <div className="relative w-full pb-4  mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main Slider Container */}
      <div className="relative h-[200px] sm:h-[500px] w-full lg:h-[600px] rounded-3xl overflow-hidden ">
        {/* Image Display */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imageData.map((image) => (
            <div key={image.id} className="min-w-full h-full relative">
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2  hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-4 sm:h-6 group-hover:scale-110 transition-transform"
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
          className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2  hover:bg-black/50  text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group"
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

      {/* Pagination Dots */}
      {/* <div className="flex justify-center items-center mt-2 space-x-3"> */}
      {/*   {imageData.map((_, index) => ( */}
      {/*     <button */}
      {/*       key={index} */}
      {/*       onClick={() => goToSlide(index)} */}
      {/*       className={`transition-all duration-300 rounded-full ${ */}
      {/*         index === currentSlide */}
      {/*           ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-violet-500 shadow-lg" */}
      {/*           : "w-3 h-3 bg-gray-300 hover:bg-gray-400" */}
      {/*       }`} */}
      {/*       aria-label={`Go to slide ${index + 1}`} */}
      {/*     /> */}
      {/*   ))} */}
      {/* </div> */}

      {/* Control Panel */}
      {/* <div className="flex justify-center items-center mt-6 space-x-4"> */}
      {/*   <button */}
      {/*     onClick={toggleAutoplay} */}
      {/*     className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${ */}
      {/*       isAutoplay */}
      {/*         ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 shadow-lg" */}
      {/*         : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-md" */}
      {/*     }`} */}
      {/*   > */}
      {/*     <span className="flex items-center space-x-2"> */}
      {/*       {isAutoplay ? ( */}
      {/*         <> */}
      {/*           <svg */}
      {/*             className="w-4 h-4" */}
      {/*             fill="currentColor" */}
      {/*             viewBox="0 0 24 24" */}
      {/*           > */}
      {/*             <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" /> */}
      {/*           </svg> */}
      {/*           <span className="hidden sm:inline">Pause</span> */}
      {/*         </> */}
      {/*       ) : ( */}
      {/*         <> */}
      {/*           <svg */}
      {/*             className="w-4 h-4" */}
      {/*             fill="currentColor" */}
      {/*             viewBox="0 0 24 24" */}
      {/*           > */}
      {/*             <path d="M8 5v14l11-7z" /> */}
      {/*           </svg> */}
      {/*           <span className="hidden sm:inline">Play</span> */}
      {/*         </> */}
      {/*       )} */}
      {/*     </span> */}
      {/*   </button> */}
      {/**/}
      {/*   <div className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg font-medium"> */}
      {/*     {currentSlide + 1} / {imageData.length} */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  );
}
