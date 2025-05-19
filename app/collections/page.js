import TopBanner from "@components/layout/TopBanner";
import Navbar from "@components/layout/Navbar";
import NavbarMobile from "@components/layout/NavbarMobile";
import StaticCollectionsBanner from "@components/shared/StaticCollectionsBanner";
import Footer from "@components/layout/Footer";
import StaticHeroBanner from "@components/shared/StaticHeroBanner";
import CopyrightBanner from "@components/shared/CopyrightBanner";

export default function Collections() {
  return (
    <div className="bg-white">
      <TopBanner />
      <Navbar />
      <NavbarMobile />
      <StaticCollectionsBanner />

      <div className=" mb-[64px] md:mb-[120px]">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 w-full px-[10%] mb-[2rem] max-w-[1728px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryPendants.png"
              alt="For Her Ring"
              className="object-contain max-h-full mb-[24px] w-full"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryBracelet.png"
              alt="For His Ring"
              className="object-contain max-h-full w-full mb-[24px]"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryRing.png"
              alt="For Her Necklace"
              className="object-contain max-h-full w-full mb-[24px]"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>
        </div>
        {/* 2/3 - 1/3 split layout in between full rows */}
        <div className="mx-auto w-full px-[10%] mb-[2rem] max-w-[1728px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6 w-full">
            {/* Left Large Product */}
            <div className="md:col-span-2 md:row-span-2 flex flex-col items-center">
              <img
                src="/collection_all_large.png"
                alt="For Her Ring"
                className="object-contain max-h-[1080px] mb-[24px] w-full"
              />
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
                <div className="text-left">
                  <p className="text-xs font-medium uppercase text-gray-500">
                    Collection Name
                  </p>
                  <p className="text-base font-semibold text-black">
                    Product Name
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <img
                    src="/heart_wishlist.png"
                    alt="Wishlist"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </div>
              </div>
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
                INR 1,80,000 <span className="ml-2">Purchase →</span>
              </button>
            </div>

            {/* Right Column Top Product */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryBracelet.png"
                alt="For His Ring"
                className="object-contain max-h-full w-full mb-[24px]"
              />
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
                <div className="text-left">
                  <p className="text-xs font-medium uppercase text-gray-500">
                    Collection Name
                  </p>
                  <p className="text-base font-semibold text-black">
                    Product Name
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <img
                    src="/heart_wishlist.png"
                    alt="Wishlist"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </div>
              </div>
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
                INR 1,80,000 <span className="ml-2">Purchase →</span>
              </button>
            </div>

            {/* Right Column Bottom Product */}
            <div className="flex flex-col items-center">
              <img
                src="/categoryRing.png"
                alt="For Her Necklace"
                className="object-contain max-h-full w-full mb-[24px]"
              />
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
                <div className="text-left">
                  <p className="text-xs font-medium uppercase text-gray-500">
                    Collection Name
                  </p>
                  <p className="text-base font-semibold text-black">
                    Product Name
                  </p>
                </div>
                <div className="mt-4 sm:mt-0">
                  <img
                    src="/heart_wishlist.png"
                    alt="Wishlist"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </div>
              </div>
              <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
                INR 1,80,000 <span className="ml-2">Purchase →</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 w-full px-[10%] max-w-[1728px]">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryPendants.png"
              alt="For Her Ring"
              className="object-contain max-h-full mb-[24px] w-full"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryBracelet.png"
              alt="For His Ring"
              className="object-contain max-h-full w-full mb-[24px]"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <img
              src="/categoryRing.png"
              alt="For Her Necklace"
              className="object-contain max-h-full w-full mb-[24px]"
            />
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
              {/* Left: Collection Name + Product Name */}
              <div className="text-left">
                <p className="text-xs font-medium uppercase text-gray-500">
                  Collection Name
                </p>
                <p className="text-base font-semibold text-black">
                  Product Name
                </p>
              </div>

              {/* Right: Heart Icon */}
              <div className="mt-4 sm:mt-0">
                <img
                  src="/heart_wishlist.png"
                  alt="Wishlist"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </div>
            </div>
            <button className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full">
              INR 1,80,000 <span className="ml-2">Purchase →</span>
            </button>
          </div>
        </div>
      </div>
      <StaticHeroBanner imageSrc="/static_hero_col.jpg" />
      <Footer />
      <CopyrightBanner />
    </div>
  );
}
