import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assests/mammothzy-img.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="flex items-center cursor-pointer">
                <Image 
                  src={logo} 
                  alt="Mammothzy Logo" 
                  width={160} 
                  height={50}
                />
                  {/* <span className="ml-2 text-xl font-bold">mammothzy</span> */}
                </div>
              </Link>
            </div>
          </div>
          <div>
            <button className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Profile
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;