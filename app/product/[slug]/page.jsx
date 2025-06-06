"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity";
import TopBanner from "@components/layout/TopBanner";
import Navbar from "@components/layout/Navbar";
import NavbarMobile from "@components/layout/NavbarMobile";
import Footer from "@components/layout/Footer";
import CopyrightBanner from "@components/shared/CopyrightBanner";
import Breadcrumb from "@components/shared/Breadcrumb";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [stoneOptions, setStoneOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedStone, setSelectedStone] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/product/${slug}`);
      const data = await res.json();

      setProduct(data);
      setStoneOptions(data.stoneOptions || []);
      setSizeOptions(data.sizeOptions || []);

      // Use selected stone/size if present
      setSelectedStone(data.stone || data.stoneOptions?.[0] || "");
      setSelectedSize(
        data.size?.toString() || data.sizeOptions?.[0]?.toString() || ""
      );
    }

    fetchData();
  }, [slug]);

  if (!product) return null;

  return (
    <div className="bg-white">
      <TopBanner />
      <Navbar />
      <NavbarMobile />
      <Breadcrumb />

      <div className="max-w-[1728px] px-[10%] mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={
              product.productImage
                ? urlFor(product.productImage).url()
                : "/fallback.png"
            }
            alt={product.productName}
            className="w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-start">
          <p className="uppercase text-sm font-medium text-[#898989] mb-2">
            {product.collectionName}
          </p>
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold uppercase">
              {product.productName}
            </h1>
            <img src="/heart_wishlist.png" alt="Wishlist" className="h-6 w-6" />
          </div>

          <p className="text-base text-black mt-4 mb-6">
            {product.description}
          </p>

          {/* Pick Stone */}
          {stoneOptions.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="uppercase font-bold text-sm">Pick Stone</p>
              </div>
              <select
                value={selectedStone}
                onChange={(e) => setSelectedStone(e.target.value)}
                className="w-full border border-black px-4 py-3 text-black uppercase font-medium cursor-pointer"
              >
                {stoneOptions.map((stone) => (
                  <option key={stone} value={stone}>
                    {stone}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Pick Size */}
          {sizeOptions.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <p className="uppercase font-bold text-sm">Pick Size</p>
              </div>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-black px-4 py-3 text-black uppercase font-medium cursor-pointer"
              >
                {sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Purchase Buttons */}
          <div className="mt-4">
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase w-full border border-black text-black font-semibold px-6 py-[36px] flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 text-center"
            >
              INR {product.price?.toLocaleString("en-IN")}
              <span className="ml-2">Purchase via WhatsApp &gt;</span>
            </a>
          </div>
        </div>
      </div>

      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="px-[10%] py-16 max-w-[1728px] mx-auto">
          <h2 className="text-xl font-bold uppercase mb-6 text-center">
            More from this collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {product.relatedProducts.map((item) => (
              <div key={item._id} className="flex flex-col items-center">
                <img
                  src={item.imageUrl || "/fallback.png"}
                  alt={item.productName}
                  className="object-contain max-h-full mb-4 w-full"
                />
                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div className="text-left">
                    <p className="text-xs font-medium uppercase text-gray-500">
                      {item.collectionName}
                    </p>
                    <p className="text-base font-semibold text-black">
                      {item.productName}
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
                <a
                  href={`/product/${item.slug.current}`}
                  className="cursor-pointer px-6 py-[36px] bg-transparent border border-black text-black font-semibold flex justify-between gap-x-[30px] hover:bg-black hover:text-white transition duration-300 uppercase sm:px-6 sm:py-[24px] w-full text-center text-nowrap"
                >
                  INR {item.price?.toLocaleString("en-IN")}{" "}
                  <span className="ml-2">Purchase →</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
      <CopyrightBanner />
    </div>
  );
}
