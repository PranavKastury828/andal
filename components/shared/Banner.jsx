'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import banner1 from '@public/banner-1.png'
import banner2 from '@public/banner-2.png'
import banner3 from '@public/banner-3.png'

const images = [
  banner1, banner2, banner3
];

export default function SlideshowBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Content */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[1340px] flex justify-between items-end">
        {/* Left: Text */}
        <div className="text-white max-w-md">
          <h1 className="text-4xl font-bold mb-4">Collection Name</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus facere rem aliquam dignissimos architecto nulla cumque cupiditate et at voluptas numquam hic eum error eligendi quidem illum laudantium, sapiente omnis.
          </p>
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-col space-y-4">
          <button className="px-6 py-3 bg-transparent border border-black text-black font-semibold hover:bg-gray-200 transition">
            View Collections
          </button>
          <button className="px-6 py-3 bg-black border border-black text-white font-semibold hover:bg-white hover:text-black transition">
            Our Story
          </button>
        </div>
      </div>
    </div>
  );
}
