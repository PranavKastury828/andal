"use client"
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import TopBanner from "@components/layout/TopBanner";
import Navbar from "@components/layout/Navbar";
import NavbarMobile from "@components/layout/NavbarMobile";

import SlideshowBanner from "@components/shared/SlideshowBanner";

import bridesToday_ft from "@public/bridesToday_ft.png";
import cosmopolitan_ft from "@public/cosmopolitan_ft.png";
import naturalDiamonds_ft from "@public/naturalDiamonds_ft.png";
import vogue_ft from "@public/vogue_ft.png";
import grazia_ft from "@public/Grazia_ft.png";
import fashionntwrk_ft from "@public/fashionNtwrk_ft.png";
import khush_ft from "@public/khush_ft.png";
import FeaturedLogos from "@components/shared/FeaturedLogos";
import StaticHeroBanner from "@components/shared/StaticHeroBanner";
import Footer from "@components/layout/Footer";
import CopyrightBanner from "@components/shared/CopyrightBanner";

export default function Home() {
  const ftImages = [
    bridesToday_ft,
    cosmopolitan_ft,
    grazia_ft,
    vogue_ft,
    fashionntwrk_ft,
    khush_ft,
    naturalDiamonds_ft,
  ];
  const secondVideoRef = useRef(null);
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    const video = secondVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVideoInView(entry.intersectionRatio >= 0.3);
      },
      {
        threshold: [0, 0.3, 1],
      }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);

  useEffect(() => {
    const video = secondVideoRef.current;
    if (!video) return;

    if (videoInView) {
      // Pause other videos if needed
      document.querySelectorAll("video").forEach((v) => {
        if (v !== video) {
          v.pause();
        }
      });

      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [videoInView]);


  return (
    <>
      <TopBanner />
      <Navbar />
      <NavbarMobile />
      <SlideshowBanner />
      <FeaturedLogos ftImages={ftImages} />

      <div className="w-full px-[10%] mx-auto max-w-[1728px]">
        <div className="flex justify-between items-center w-full mb-[2rem] md:mb-[4rem] gap-x-[10rem]">
          <div>
            <h2 className="text-lg uppercase text-black font-bold">
              Love Stories
            </h2>
            <p className="text-regular text-black max-w-[800px]">
              A promise of a lifetime. At Andal, we create bespoke engagemnet
              and wedding rings for men and women. Select from an array of cuts,
              shapes and gemstones for the ring of your dreams.
            </p>
          </div>
          <div>
            <button className="cursor-pointer px-6 py-[36px] bg-black border border-black text-white font-semibold flex gap-x-[30px] uppercase sm:px-6 sm:py-[24px] text-nowrap">
              Book an appointment<span className="ml-2">→</span>
            </button>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 w-full mb-[64px] md:mb-[120px]">
          <div>
            <div className="flex justify-center items-center bg-[#efefef] min-h-[576px] mb-[1rem] md:mb-[1.5rem]">
              <img
                src="/forHerRing.png"
                alt="For Her Ring"
                className="object-contain max-h-full max-w-full mb-[24px]"
              />
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
              For Her <span className="ml-2">→</span>
            </button>
          </div>

          <div>
            <div className="flex justify-center items-center bg-[#efefef] min-h-[576px] mb-[1rem] md:mb-[1.5rem]">
              <img
                src="/forHisRing.png"
                alt="For Her Ring"
                className="object-contain max-h-full max-w-full mb-[24px]"
              />
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
              For Him <span className="ml-2">→</span>
            </button>
          </div>
        </div>

        <div className=" mb-[64px] md:mb-[120px]">
          <div className="flex w-full justify-center items-center">
            <h2 className="text-lg uppercase text-black font-bold mb-[24px] md:mb-[40px]">
              shop by
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 w-full">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/shopByGemstone.png"
                alt="For Her Ring"
                className="object-contain max-h-full max-w-full mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
                Gemstone <span className="ml-2">→</span>
              </button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/shopByCollection.png"
                alt="For His Ring"
                className="object-contain max-h-full max-w-full mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
                Collection <span className="ml-2">→</span>
              </button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/shopByBespoke.png"
                alt="For Her Necklace"
                className="object-contain max-h-full max-w-full mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
                Bespoke <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-[64px] md:mb-[120px]">
          <div className="flex w-full justify-center items-center">
            <h2 className="text-lg uppercase text-black font-bold mb-[24px] md:mb-[40px]">
              categories
            </h2>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 w-full">
            {/* Column 1 */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryPendants.png"
                alt="Gemstone"
                className="object-cover w-full h-auto mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full whitespace-nowrap text-nowrap">
                Necklaces
              </button>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryBracelet.png"
                alt="Collection"
                className="object-cover w-full h-auto mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-nowrap">
                Bracelets
              </button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryCuffs.png"
                alt="Bespoke"
                className="object-cover w-full h-auto mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full whitespace-nowrap">
                ear rings
              </button>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryRing.png"
                alt="Luxury"
                className="object-cover w-full h-auto mb-[24px]"
              />
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full whitespace-nowrap">
                rings
              </button>
            </div>
          </div>
        </div>

        <div className="mb-[64px] md:mb-[120px]">
          <div className="mb-[64px] md:mb-[120px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {/* First Column: Video */}
              <div className="flex justify-center items-center">
                <video
                  ref={secondVideoRef}
                  className="w-full max-w-[650px] h-[725px] object-cover"
                  controls
                  muted
                  playsInline
                >
                  <source src="/6.1.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full">
                {/* Nested Grid - Column 1 */}
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="/bentoHomeOne.png"
                    alt="Image 1"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Column 2 (1x2 Element) */}
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="/bentoHomeTwo.png"
                    alt="Image 2"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Column 3 (2x1 Element) */}
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="/bentoHomeThree.png"
                    alt="Image 3"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nested Grid - Column 4 (2x2 Element - Blank Space for Text and Buttons) */}
                <div className="flex flex-col justify-start items-start w-full">
                  <div className="w-full">
                    {/* Add your text and buttons here */}
                    <h2 className="text-regular text-[#b0b0b0] font-bold mb-4 uppercase">
                      Bestselling
                    </h2>
                    <h2 className="text-xl font-bold mb-4 uppercase">
                      The Holiday
                    </h2>
                    <p className="text-lg mb-[24px]">
                      Discover our signature Spiral Pendants and Bracelets
                    </p>
                    <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex gap-x-[30px] hover:bg-black hover:text-white hover:border-white transition duration-300 uppercase sm:px-6 sm:py-[24px] text-nowrap w-full mb-[24px]">
                      Shop Collection <span className="ml-2">→</span>
                    </button>

                    <button
                      className={`cursor-pointer px-6 py-[24px] border text-white font-semibold uppercase flex items-center justify-between transition sm:w-full md:max-w-[300px] bg-black border-black text-nowrap`}
                    >
                      Explore Campaign <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StaticHeroBanner imageSrc="/static_banner_homepage.png" />
      <div className="w-full px-[10%] mx-auto max-w-[1728px] md:mt-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[15%] w-full mb-[64px] md:mb-[120px]">
          <div className="flex flex-col justify-center py-12">
            <div className="mb-[64px] lg:mb-[180px]">
              <h3 className="text-base text-[#b0b0b0] font-bold mb-4 uppercase">
                about us
              </h3>
              <h2 className="text-xl uppercase text-black mb-[1.5rem]">
                meet the founder
              </h2>
              <p className="text-base text-black">
                Esshitha Guna, a second generation jeweller and lawyer, founded
                Andal in 2022. After years of experience in Gunaas, the family's
                diamond jewellery brand, Esshitha's formal experience with
                gemology began in The Gemological Institute of America (GIA) in
                New York in 2021. <br />
                <br />
                Named after her paternal grandmother, the ethos of Andal is
                reflected in the confluence of impeccable natural gemstones,
                talent from across the world and craftsmanship that speaks for
                itself.
              </p>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-black border border-black text-white font-semibold whitespace-nowrap gap-x-[30px] uppercase sm:px-6 sm:py-[24px] max-w-[324px] flex justify-between">
              About Andal <span className="ml-2">→</span>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/founder.png"
              alt="Founder"
              className="w-full h-auto mb-[24px] md:min-h-[724px] object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
      <CopyrightBanner />
    </>
  );
}
