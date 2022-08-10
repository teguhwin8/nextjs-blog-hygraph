import React from 'react';
import Link from 'next/link';
import MenuItem from './MenuItem';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <div
      className="container mx-auto px-4 md:px-10 md:mb-8
      sticky md:relative top-0 z-20 bg-black md:bg-transparent"
    >
      <div className="w-full flex items-center justify-between py-4 md:py-8">
        <div className="md:float-left block">
          <Link href="/">
            <a
              className="cursor-pointer font-bold text-2xl md:text-4xl
              text-white md:text-black"
            >
              NgeHosting<span className="text-pink-700">.id</span>
            </a>
          </Link>
        </div>
        <div className="hidden md:flex md:gap-10">
          <MenuItem />
        </div>
        <div className="flex md:hidden">
          <BurgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
