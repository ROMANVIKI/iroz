"use client";
import React, { useRef, useState, useEffect } from "react";
import Image1 from "../public/assets/images/image1.jpg";
import Image2 from "../public/assets/images/image2.jpg";
import Image3 from "../public/assets/images/image3.jpg";
import Image4 from "../public/assets/images/image4.jpg";
import Image from "next/image";

const imageData = [
  { id: 1, imageUrl: Image1, alt: "Image 1" },
  { id: 2, imageUrl: Image2, alt: "Image 2" },
  { id: 3, imageUrl: Image3, alt: "Image 3" },
  { id: 4, imageUrl: Image4, alt: "Image 4" },
];

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const isDragging = useRef(false);
  const intervalRef = useRef(null);

  // Autoplay
  useEffect(() => {
    if (isAutoplay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % imageData.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoplay]);

  // Touch events (mobile)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      clearInterval(intervalRef.current);
      setIsAutoplay(false);
      delta > 0 ? nextSlide() : prevSlide();
    }
  };

  // Mouse events (desktop)
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const delta = mouseStartX.current - e.clientX;
    isDragging.current = false;

    if (Math.abs(delta) > 50) {
      clearInterval(intervalRef.current);
      setIsAutoplay(false);
      delta > 0 ? nextSlide() : prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageData.length) % imageData.length);
  };

  return (
    <div className="w-full  mx-auto select-none relative z-0">
      <div
        className="relative z-0 h-[200px] sm:h-[500px] w-full lg:h-[400px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div
          className="flex z-0 transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imageData.map((image) => (
            <div key={image.id} className="min-w-full  h-full relative">
              <Image
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
