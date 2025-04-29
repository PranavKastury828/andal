import Image from "next/image";
import TopBanner from "@components/layout/TopBanner";
import Navbar from "@components/layout/Navbar";

import Banner from '@components/shared/Banner'

import bridesToday_ft from "@public/bridesToday_ft.png"
import cosmopolitan_ft from "@public/cosmopolitan_ft.png"
import naturalDiamonds_ft from "@public/naturalDiamonds_ft.png"
import vogue_ft from "@public/vogue_ft.png"
import grazia_ft from "@public/Grazia_ft.png"
import fashionntwrk_ft from "@public/fashionNtwrk_ft.png"
import khush_ft from "@public/khush_ft.png"

export default function Home() {
  const ftImages = [
    bridesToday_ft, cosmopolitan_ft, grazia_ft, vogue_ft, fashionntwrk_ft, khush_ft, naturalDiamonds_ft
  ]
  return (
    <>
    <TopBanner/>
    <Navbar/>
    <Banner/>
    <div className='my-[10%] flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center '>
      <h2 className='text-regular font-bold uppercase mb-[3rem]'>featured in</h2>
      </div>
      
      <div className="flex gap-[10%] justify-between">
        {ftImages.map((imgSrc, index) => (
          <div key={index} className="">
            <Image
              src={imgSrc}
              alt={`Featured Logo ${index}`}
                // or adjust based on your design
              
              className="object-contain h-[48px] w-full"
            />
          </div>
        ))}
      </div>

    </div>

    <div>
      <div className="flex justify-between items-center w-full">
        
      </div>
    </div>

    </>
    
  );
}
