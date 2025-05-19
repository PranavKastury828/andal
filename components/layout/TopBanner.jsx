import CalendarHeart from '@public/CalendarHeart.png'
import Gps from '@public/Gps.png'
import Phonecall from '@public/PhoneCall.png'

import Image from 'next/image'
const TopBanner = () => {
    return (
        <div className="bg-[#1e1e1e]">
        <div className="bg-[#1e1e1e] px-[10%] py-[2rem] max-w-[1728px] mx-auto">
  <div className="flex justify-between  align-center center-this-div">
    <div className="flex justify-between items-center">
      <Image
        src={CalendarHeart}
        className="pr-[16px] h-[32px] w-auto"
        alt="calendar icon"
      />
      <h2 className="text-white text-[14px] hidden lg:block">Book an appointment</h2>
    </div>

    <div className="flex justify-between items-center gap-x-[56px]">
      <div className="flex justify-between items-center">
        <Image
          src={Gps}
          className="pr-[16px] h-[32px] w-auto"
          alt="gps icon"
        />
        <h2 className="text-white text-[14px] hidden lg:block">Store Locator</h2>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={Phonecall}
          className="pr-[16px] h-[32px] w-auto"
          alt="phone icon"
        />
        <h2 className="text-white text-[14px] hidden lg:block">Contact Us</h2>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default TopBanner