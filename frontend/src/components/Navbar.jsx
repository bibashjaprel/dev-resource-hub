import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Title */}
        <div className="text-lg font-bold">
          <h1>DEV RESOURCES HUB</h1>
        </div>
        
        {/* Search Bar */}
        <div className="flex flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-400">Submit Resource</a>
          <a href="#" className="hover:text-gray-400">Sign In</a>
          <a href="#" className="hover:text-gray-400">Newsletter</a>
        </div>
      </div>

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
