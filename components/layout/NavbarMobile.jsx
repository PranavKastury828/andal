'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AndalLogo from '@public/AndalLogoSvg.svg';
import MagnifyingGlass from '@public/MagnifyingGlass.png';
import heart from '@public/Heart.png';
import user from '@public/User.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Jewelry', href: '/jewelry' },
  { name: 'Collections', href: '/collections' },
  { name: 'Love Stories', href: '/love-stories' },
  { name: 'Our Story', href: '/our-story' },
];

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-[10%] py-4 w-full relative z-50 bg-white lg:hidden">
      {/* Top Row: Logo + Hamburger + Icons */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-5"
            aria-label="Toggle Menu"
          >
            <span className="block w-full h-[2px] bg-black" />
            <span className="block w-full h-[2px] bg-black" />
            <span className="block w-full h-[2px] bg-black" />
          </button>

          {/* Logo */}
          <Image src={AndalLogo} alt="Andal Logo" className="h-8 w-auto" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Image src={MagnifyingGlass} alt="Search Icon" className="h-6 w-auto" />
          <Image src={heart} alt="Wishlist Icon" className="h-6 w-auto" />
          <Image src={user} alt="Profile Icon" className="h-6 w-auto" />
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <nav
        className={`transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-[400px] mt-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 bg-white py-4">
          {navItems.map((item) => (
            <li key={item.name} className="px-2">
              <Link
                href={item.href}
                className="block text-black font-medium text-lg hover:underline transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}