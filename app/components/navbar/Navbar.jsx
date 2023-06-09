"use client";

import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              Holidaze
            </a>
          </div>

          <div className="sm:hidden">
            <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white" onClick={toggleMenu}>
              {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
            </button>
          </div>

          <div className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                  Venues
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-gray-300 px-4 py-2" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2">
                    Register
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-900">
            <ul className="sm:flex sm:space-x-4 sm:justify-center py-2">
              <li>
                <a href="#" className="text-white hover:text-gray-300 px-4 py-2 block text-center" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 px-4 py-2 block text-center" onClick={closeMenu}>
                  Venues
                </a>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <a href="#" className="text-white hover:text-gray-300 px-4 py-2 block text-center" onClick={closeMenu}>
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white hover:text-gray-300 px-4 py-2 block text-center" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <li>
                  <a href="#" className="text-white hover:text-gray-300 px-4 py-2 block text-center" onClick={closeMenu}>
                    Login/Register
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
