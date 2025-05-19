'use client';

import Image from 'next/image';

export default function StaticCollectionsBanner() {
  const backgroundImage = '/collectionsbanner.jpg'; // Ensure this is inside /public

  return (
    <div className="relative w-full h-[80vh] max-h-[576px] overflow-hidden bg-black md:mb-[120px] mb-[64px]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Collections Hero Banner"
        fill
        priority
        className="object-cover object-center transform scale-[1.02]"
      />

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Centered Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl font-bold uppercase tracking-wide">
          Collections
        </h1>
      </div>
    </div>
  );
}
