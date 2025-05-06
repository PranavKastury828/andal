import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-[48px] lg:py-[96px] text-base">
            <div className="w-full px-[10%] mx-auto max-w-[1728px]">
                <div className="flex flex-col md:flex-row justify-between lg:gap-[240px]">
                    {/* Left Side: Former Columns 1 & 2 */}
                    <div className="flex flex-col md:flex-row gap-0 md:gap-[80px]">
                        {/* Customer Care */}
                        <div className="lg:min-w-[280px] mb-8 md:mb-0">
                            <h3 className="font-semibold mb-4 uppercase text-base">Customer Care</h3>
                            <ul className="space-y-2">
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">Contact & Locate Us</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">book appointment</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">Product care and repair</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">Track order</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">Shipping, delivery & payments</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">returns & exchanges</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">Faq's</li>
                            </ul>
                        </div>

                        {/* Legalities and Our Company */}
                        <div className='lg:min-w-[220px] mb-8 md:mb-0'>
                            <h3 className="font-semibold mb-4 uppercase text-base">Legalities</h3>
                            <ul className="space-y-2">
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">privacy Policy</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">cookie policy and settings</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">terms and conditions</li>
                            </ul>
                            <h3 className="font-semibold mt-6 mb-4 uppercase text-base">our company</h3>
                            <ul className="space-y-2">
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">our story</li>
                                <li className="text-base uppercase mb-[8px] text-[#1e1e1e]">careers</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Newsletter */}
                    <div className="mt-10 md:mt-0 md:max-w-[400px]">
                        <h3 className="font-semibold mb-4 uppercase text-base">Subscribe to Our Newsletter</h3>
                        <p className="text-base text-black mb-4">
                            Sign up to be on our mailing list to receive our latest collection catalogues.
                            <br />No spam, we assure you!
                        </p>
                        <form className="w-full">
    <div className="relative w-full">
        <input
            type="email"
            placeholder="ENTER ID"
            className="w-full pr-12 px-4 py-[30px] border border-black focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base placeholder:text-base"
        />
        <button
            type="submit"
            className="cursor-pointer absolute right-0 top-0 bottom-0 w-[80px] bg-black text-white flex items-center justify-center hover:bg-gray-800"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</form>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
