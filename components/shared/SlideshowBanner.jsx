"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    type: "video",
    src: "/slideshow.mov",
    alt: "Andal Jewelry Intro Video",
    title: "The Classics",
    description: "A collection of eternity Rings and Tennis Bracelets",
    buttons: [
      { label: "Go To Collections", href: "" },
      { label: "Explore Campaign", href: "" },
    ],
  },
  {
    type: "image",
    src: "/banner-1.png",
    alt: "Andal Bridal Collection Banner",
    title: "The Summer of '25",
    description: "Our debut collection of Ear Cuffs and Hoops",
    buttons: [
      { label: "Shop Summer", href: "" },
      { label: "Lookbook", href: "" },
    ],
  },
  {
    type: "image",
    src: "/banner-3.png",
    alt: "Andal Love Stories Campaign",
    title: "The Classics",
    description: "Discover our Eternity Rings and Tennis Bracelets",
    buttons: [
      { label: "View Rings", href: "" },
      { label: "Discover More", href: "" },
    ],
  },
];

export default function SlideshowBanner() {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const videoEl = videoRef.current;
    const currentSlide = slides[current];

    if (!videoEl) return;

    const isVideoSlide = currentSlide.type === "video";

    if (isVideoSlide && inView) {
      videoEl.controls = true;
      videoEl.muted = false;
      videoEl.volume = 1;

      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          videoEl.muted = true;
          videoEl.play();
        });
      }
    } else {
      videoEl.pause();
      videoEl.currentTime = 0;
      videoEl.controls = false;
    }
  }, [current, inView]);

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
      <div
        ref={containerRef}
        className="relative w-full h-[80vh] overflow-hidden bg-black"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {slide.type === "video" ? (
              <video
                ref={videoRef}
                src={slide.src}
                loop
                playsInline
                controls={false}
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
            <div className="absolute inset-0 bg-black/20 z-10" />
          </div>
        ))}

        <div className="absolute bottom-0 py-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6 flex justify-between items-end z-20 flex-col sm:flex-row">
          <div className="text-white max-w-md mb-6 sm:mb-0">
            <h1 className="text-4xl font-bold mb-4">{slides[current].title}</h1>
            <p className="text-lg">{slides[current].description}</p>
          </div>

          <div className="flex flex-col space-y-4 sm:space-y-4">
            {slides[current].buttons.map((btn, i) => (
              <a
                key={i}
                href={btn.href}
                className={`cursor-pointer px-6 py-[24px] border text-white font-semibold uppercase flex items-center justify-between transition sm:w-full md:max-w-[300px] ${
                  i === 0
                    ? "bg-transparent border-white hover:bg-white hover:text-black"
                    : "bg-black border-black"
                }`}
              >
                {btn.label}
                <span className="ml-2">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2 py-4">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-black w-6" : "bg-black/30 w-2"
            }`}
          />
        ))}
      </div>
    </>
  );
}
