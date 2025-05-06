'use client';

import Image from 'next/image';

export default function StaticHeroBanner() {
  const backgroundImage = '/static_banner_homepage.png'; // Make sure this is in /public

  return (
    <div className="relative w-full h-[80vh] max-h-[576px] overflow-hidden bg-black md:mb-[120px] mb-[64px]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Andal Static Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
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
  );
}
