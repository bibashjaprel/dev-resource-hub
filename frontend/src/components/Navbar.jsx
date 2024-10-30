import React from 'react';
import { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Title */}
        <div className="text-lg font-bold">
          <h1>DEV RESOURCES HUB</h1>
        </div>
        
        {/* Toggle button for mobile view */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Search Bar (Hidden on smaller screens) */}
        <div className="hidden lg:flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
        </div>

        {/* Action Buttons (Hidden on smaller screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-400">Submit Resource</a>
          <a href="#" className="hover:text-gray-400">Sign In</a>
          <a href="#" className="hover:text-gray-400">Newsletter</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 py-2 px-6">
          <a href="#" className="block py-2 hover:text-gray-400">Sign In</a>
        </div>
      )}


      {/* Categories */}
      <div className="bg-gray-900 py-2">
        <div className="container mx-auto flex justify-center space-x-6 px-6">
          <a href="#" className="hover:text-gray-400">Accessibility</a>
          <a href="#" className="hover:text-gray-400">AI</a>
          <a href="#" className="hover:text-gray-400">Analytics</a>
          <a href="#" className="hover:text-gray-400">Animation</a>
          <a href="#" className="hover:text-gray-400">API Building</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
