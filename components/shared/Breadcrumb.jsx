"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((seg) => decodeURIComponent(seg));

  const breadcrumbItems = ["home", ...segments];

  return (
    <div className="w-full bg-[#f2f2f2] py-4 mb-[28px] max-w-[1728px] px-[10%] mx-auto">
      <div className=" flex flex-wrap justify-center gap-x-1 gap-y-2 text-[1rem] uppercase">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const href = "/" + breadcrumbItems.slice(1, index + 1).join("/");

          return isLast ? (
            <span key={index} className="text-black">
              {item}
            </span>
          ) : (
            <span key={index} className="flex items-center gap-x-1">
              <Link
                href={index === 0 ? "/" : href}
                className="text-[#898989] underline"
              >
                {item}
              </Link>
              <span className="text-[#898989]">/</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
