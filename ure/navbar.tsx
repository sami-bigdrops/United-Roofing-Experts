import React      from 'react';
import Image      from 'next/image';
import Link       from 'next/link';

export default function Navbar() {
  return (
    <>
      {/* DESKTOP NAVBAR */}
      <div id="desktop-navbar" className="hidden md:block ">
        <div className="container mx-auto">
          <div className=" px-4 py-6 xl:px-45 xl:py-4 flex justify-between items-center h-max">
            <Link href="/">
              <Image 
                src="/logo.webp" 
                alt="United Roofing Experts" 
                width={200} 
                height={60} 
                className="w-[190px] h-auto lg:w-[200px] lg:h-auto xl:w-[200px] xl:h-auto " 
              />
            </Link>
            <div className="flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-300 ease-in-out">
              <a href="tel:+18664951543" className="no-underline text-gray-900 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold mb-0">
              Call Now to Get a FREE Quote{'  '} <span className="phone-button text-white bg-primary border-2 border-transparent hover:bg-transparent hover:border-[#0E73B9] hover:text-primary 2xl:text-xl font-semibold px-5 py-2.5 rounded transition-colors duration-200">(1800) 621-6036</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE / TABLET NAVBAR */}
      <div id="mobile-navbar" className="bg-white sm:hidden">
        <div className="container">
          <div className="p-2.5 w-full flex flex-col-reverse justify-between items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="United Rooring Experts"
                width={140}
                height={35}
                className="w-[120px] h-auto"
              />
            </Link>
            <p className="text-xs font-medium text-center mb-0 ">
            Call Now to Get a FREE Quote {' '}
              <a
                href="tel:+18664951543"
                className="font-semibold text-shw-secondary text-primary"
              >
                 (1800) 621-6036
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
