'use client';

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MagnifyingGlass from '@public/MagnifyingGlass.png';
import andalLogo from '@public/AndalLogoSvg.svg';
import user from '@public/User.png';
import heart from '@public/Heart.png';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Jewelry', href: '/jewelry' },
    { name: 'Collections', href: '/collections' },
    { name: 'Love Stories', href: '/love-stories' },
    { name: 'Our Story', href: '/our-story' },
  ];

  return (
    <header className="px-[10%] py-8 max-w-[1728px] mx-auto hidden lg:block">
      <div className=" flex flex-col items-center space-y-6">
        {/* Top Icons */}
        <div className="w-full flex justify-between items-center">
          {/* Left: Search Icon */}
          <div>
            <Image src={MagnifyingGlass} alt="Search Icon" className="h-8 w-auto" />
          </div>

          {/* Center: Logo */}
          <div>
          <Image src={andalLogo} alt="Andal Logo" className="h-40 w-auto" />
          </div>

          {/* Right: Heart and User Icons */}
          <div className="flex items-center space-x-4">
            <Image src={heart} alt="Wishlist Icon" className="h-8 w-auto" />
            <Image src={user} alt="Profile Icon" className="h-8 w-auto" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="w-full flex justify-center">
          <ul className="flex space-x-10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`transition-colors ${
                      isActive ? 'font-semibold text-black' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {/* Underline */}
                  <div
                    className={`absolute left-0 right-0 h-[2px] bg-black transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100 ${
                      isActive ? 'scale-x-100' : ''
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
