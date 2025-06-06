"use client";

export default function ShowControlButtons({
  totalCount,
  currentCount,
  onCountChange,
  onBackToTop,
}) {
  const options = [9, 18, 27];

  return (
    <div className="mx-auto w-full px-[10%] max-w-[1728px] mt-10 flex flex-col sm:flex-row justify-between items-center gap-y-6">
      {/* Show count buttons */}
      <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
        <h2 className="uppercase font-bold text-base mr-2 sm:mr-4">Show:</h2>
        {options.map((count) => (
          <button
            key={count}
            onClick={() => onCountChange(count)}
            className={`px-4 py-2 sm:px-8 sm:py-4 border border-black font-semibold cursor-pointer transition-colors duration-300
              ${
                currentCount === count
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-black hover:text-white"
              }
            `}
          >
            {count}
          </button>
        ))}
        <button
          onClick={() => onCountChange(totalCount)}
          className={`uppercase px-4 py-2 sm:px-8 sm:py-4 border border-black font-semibold cursor-pointer transition-colors duration-300
            ${
              currentCount === totalCount
                ? "bg-black text-white"
                : "bg-transparent text-black hover:bg-black hover:text-white"
            }
          `}
        >
          all
        </button>
      </div>

      {/* Back to top */}
      <div>
        <button
          onClick={onBackToTop}
          className="uppercase px-4 py-2 sm:px-6 sm:py-4 border border-black bg-transparent text-black hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
        >
          Back to top
        </button>
      </div>
    </div>
  );
}
