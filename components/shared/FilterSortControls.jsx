"use client";

import { useEffect, useState } from "react";

export default function FilterSortControls({
  allProducts,
  selectedCollection,
  setSelectedCollection,
  sortOrder,
  setSortOrder,
}) {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    if (!allProducts || allProducts.length === 0) return;

    const unique = Array.from(
      new Set(allProducts.map((p) => p.collectionName).filter(Boolean))
    );
    setCollections(unique);
  }, [allProducts]);

  const shownCount = allProducts.filter((p) =>
    selectedCollection === "all"
      ? true
      : p.collectionName === selectedCollection
  ).length;

  return (
    <div className="w-full max-w-[1728px] px-[10%] mx-auto mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between mb-10">
      <div className="text-black font-medium">
        {Math.min(shownCount, 9)}/{shownCount}
      </div>

      {/* Filter + Sort Controls */}
      <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 w-full sm:w-auto">
        {/* Filter */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="collection"
            className="font-bold uppercase text-base text-black text-nowrap"
          >
            Filter |
          </label>
          <div className="relative">
            <select
              id="collection"
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
              className="appearance-none bg-white text-black font-medium px-4 py-2 pr-10 cursor-pointer
                         focus:outline-none focus:ring-0 transition-all duration-200"
              style={{
                backgroundImage: 'url("/filter-icon.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="all">All</option>
              {collections.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="font-bold uppercase text-base text-black text-nowrap"
          >
            Sort by |
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-white text-black font-medium px-4 py-2 pr-10 cursor-pointer
                         focus:outline-none focus:ring-0 transition-all duration-200"
              style={{
                backgroundImage: 'url("/filter-icon.svg")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="default">Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
