'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function FeaturedLogos({ ftImages }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let autoScroll;
    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (window.innerWidth < 640) {
          container.scrollBy({ left: container.offsetWidth * 0.8, behavior: 'smooth' });
        }
      }, 4000);
    };

    startAutoScroll();
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="my-[10%] flex flex-col justify-center items-center w-full px-[5%] mx-auto max-w-[1728px]">
      <div className="flex justify-center items-center">
        <h2 className="text-regular font-bold uppercase mb-[3rem]">featured in</h2>
      </div>

      {/* Desktop/Tablet Layout */}
      <div className="hidden sm:flex gap-[10%] justify-between w-full">
        {ftImages.map((imgSrc, index) => (
          <div key={index} className="w-full max-w-[200px] flex justify-center">
            <Image
              src={imgSrc}
              alt={`Featured Logo ${index}`}
              className="object-contain h-[48px] w-auto"
            />
          </div>
        ))}
      </div>

      {/* Mobile Layout: Scrollable + Snapping + Animation */}
      <div
        ref={scrollRef}
        className="
          flex sm:hidden w-full gap-4
          overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-[5vw]
        "
      >
        {ftImages.map((imgSrc, index) => (
          <div
            key={index}
            className={`
              flex-shrink-0 snap-center w-[75vw]
              flex justify-center items-center
              animate-fade-slide-in opacity-0
              motion-safe:animate-[fade-slide-in_0.8s_ease-out_forwards]
            `}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <Image
              src={imgSrc}
              alt={`Featured Logo ${index}`}
              className="object-contain h-[48px] w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
