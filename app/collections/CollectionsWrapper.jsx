"use client";

import { useState } from "react";
import { animate } from "framer-motion";
import TopBanner from "@components/layout/TopBanner";
import Navbar from "@components/layout/Navbar";
import NavbarMobile from "@components/layout/NavbarMobile";
import StaticCollectionsBanner from "@components/shared/StaticCollectionsBanner";
import Footer from "@components/layout/Footer";
import StaticHeroBanner from "@components/shared/StaticHeroBanner";
import CopyrightBanner from "@components/shared/CopyrightBanner";
import ShowControlButtons from "@components/shared/ShowControlButtons";
import FilterSortControls from "@components/shared/FilterSortControls";
import Breadcrumb from "@components/shared/Breadcrumb";
import Link from "next/link";

export default function CollectionsWrapper({ products }) {
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  const handleScrollToTop = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    animate(scrollY, 0, {
      duration: 0.8,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  if (!Array.isArray(products)) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  // Apply filter
  let filteredProducts =
    selectedCollection === "all"
      ? products
      : products.filter((p) => p.collectionName === selectedCollection);

  // Apply sort
  if (sortOrder === "priceLowHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "priceHighLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="bg-white">
      <TopBanner />
      <Navbar />
      <NavbarMobile />
      <Breadcrumb />
      <StaticCollectionsBanner />

      <div className="mb-[64px] md:mb-[120px]">
        <FilterSortControls
          allProducts={products}
          selectedCollection={selectedCollection}
          setSelectedCollection={setSelectedCollection}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="mx-auto w-full px-[10%] max-w-[1728px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 mb-[80px]">
          {displayedProducts.map((product, i) => (
            <div key={product._id || i} className="flex flex-col items-center">
              <img
                src={product.imageUrl || "/fallback.png"}
                alt={product.productName}
                className="object-contain max-h-full mb-[24px] w-full"
              />
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[16px] px-2 sm:px-0">
                <div className="text-left">
                  <p className="text-xs font-medium uppercase text-gray-500">
                    {product.collectionName}
                  </p>
                  <p className="text-base font-semibold text-black">
                    {product.productName}
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
              <Link
                href={`/product/${product.slug?.current}`}
                className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-center"
              >
                INR {product.price?.toLocaleString("en-IN")}{" "}
                <span className="ml-2">Purchase →</span>
              </Link>
            </div>
          ))}
        </div>

        <ShowControlButtons
          totalCount={filteredProducts.length}
          currentCount={visibleCount}
          onCountChange={setVisibleCount}
          onBackToTop={handleScrollToTop}
        />
      </div>

      <StaticHeroBanner imageSrc="/static_hero_col.jpg" />
      <Footer />
      <CopyrightBanner />
    </div>
  );
}
