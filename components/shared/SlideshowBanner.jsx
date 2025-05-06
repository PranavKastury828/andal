'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const slides = [
  { type: 'video', src: '/slideshow.mov', alt: 'Andal Jewelry Intro Video' },
  { type: 'image', src: '/banner-1.png', alt: 'Andal Bridal Collection Banner' },
  { type: 'image', src: '/banner-3.png', alt: 'Andal Love Stories Campaign' },
];

export default function SlideshowBanner() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const videoRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Pause video when inactive
  useEffect(() => {
    if (videoRef.current) {
      if (slides[current].type === 'video') {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [current]);

  // Swipe handlers (mobile)
  const handleTouchStart = (e) => {
    touchStart.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const threshold = 50;

    if (distance > threshold) {
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -threshold) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <>
      {/* Slideshow */}
      <div
        className="relative w-full h-[80vh] overflow-hidden bg-black"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Slide content (image or video) */}
            {slide.type === 'video' ? (
              <video
                ref={videoRef}
                src={slide.src}
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover"
              />
            )}

            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/20 z-10" />
          </div>
        ))}

        {/* Overlayed Content */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6 flex justify-between items-end z-20 flex-col sm:flex-row">
          {/* Text Section */}
          <div className="text-white max-w-md mb-6 sm:mb-0">
            <h1 className="text-4xl font-bold mb-4">Discover Elegance</h1>
            <p className="text-lg">Handcrafted Jewelry for Every Love Story.</p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col space-y-4 sm:space-y-4">
            <button className="cursor-pointer px-6 py-[24px] bg-transparent border border-white text-white font-semibold flex gap-x-[30px] hover:bg-white hover:text-black transition uppercase">
              Go To Collections <span className="ml-2">→</span>
            </button>

            <button className="cursor-pointer px-6 py-[24px] bg-black border border-black text-white font-semibold flex gap-x-[30px] uppercase">
              Explore Campaign <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center space-x-2 py-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? 'bg-black w-6' : 'bg-black/30 w-2'
            }`}
          />
        ))}
      </div>
    </>
  );
}
