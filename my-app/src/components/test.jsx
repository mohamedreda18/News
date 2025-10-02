// components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Section - Corona Updates */}
          <div className="flex items-center">
            <Link to="/" className="text-red-600 font-semibold text-lg hover:text-red-700 transition duration-200">
              Corona Updates
            </Link>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/politics" className="text-gray-800 hover:text-red-600 font-medium transition duration-200">
              Politics
            </Link>
            <Link to="/business" className="text-gray-800 hover:text-red-600 font-medium transition duration-200">
              Business
            </Link>
            <Link to="/sports" className="text-gray-800 hover:text-red-600 font-medium transition duration-200">
              Sports
            </Link>
            <Link to="/world" className="text-gray-800 hover:text-red-600 font-medium transition duration-200">
              World
            </Link>
            <Link to="/travel" className="text-gray-800 hover:text-red-600 font-medium transition duration-200">
              Travel
            </Link>
            <div className="relative group">
              <Link to="/podcasts" className="text-gray-800 hover:text-red-600 font-medium transition duration-200 flex items-center">
                Podcasts
                <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {/* Dropdown menu would go here */}
            </div>
          </nav>

          {/* Right Section - Search/User */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Link to="/search" className="text-gray-600 hover:text-red-600 transition duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-red-600 transition duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/politics" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Politics
              </Link>
              <Link 
                to="/business" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link 
                to="/sports" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sports
              </Link>
              <Link 
                to="/world" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                World
              </Link>
              <Link 
                to="/travel" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Travel
              </Link>
              <Link 
                to="/podcasts" 
                className="text-gray-800 hover:text-red-600 font-medium py-2 transition duration-200 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Podcasts
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;