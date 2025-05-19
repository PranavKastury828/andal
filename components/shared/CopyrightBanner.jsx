'use client';

export default function CopyrightBanner() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1e1e1e] py-8">
      <p className="text-[#ababab] text-base text-center">
        © Copyright | Andal {currentYear}
      </p>
    </div>
  );
}
