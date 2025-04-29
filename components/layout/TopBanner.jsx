import CalendarHeart from '@public/CalendarHeart.png'
import Gps from '@public/Gps.png'
import Phonecall from '@public/PhoneCall.png'

import Image from 'next/image'
const TopBanner = () => {
    return (
        <>
        <div className='bg-[#1e1e1e] px-[10%] py-[2rem]'>
            <div className="flex justify-between max-w-[1340px]">
                <div className="flex justify-between items-center">
                    <Image src={CalendarHeart} className='pr-[16px] h-[32px] w-auto' alt='calendar icon'/>
                    <h2 className='text-white text-[14px]'>Book an appointment</h2>
                </div>
                <div className='flex justify-between items-center gap-x-[56px]'>
                <div className="flex justify-between items-center">
                <Image src={Gps} className='pr-[16px] h-[32px] w-auto' alt='calendar icon'/>
                <h2 className='text-white text-[14px]'>Store Locator</h2>
                </div>
                <div className="flex justify-between items-center">
                <Image src={Phonecall} className='pr-[16px] h-[32px] w-auto' alt='calendar icon'/>
                <h2 className='text-white text-[14px]'>Contact Us</h2>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopBanner