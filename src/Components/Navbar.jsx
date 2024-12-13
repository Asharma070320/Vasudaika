import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

// NavLink Component
const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
      <Link
        to={to}
        className={`text-gray-700 hover:text-yellow-800 relative px-3 py-2 rounded-md text-base lg:text-md xl:text-lg font-medium transition duration-300 group ${
          isActive ? 'text-yellow-800' : ''
        }`}
      >
        {children}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500 transform transition-transform duration-300 ease-in-out ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
      </Link>
    );
  };
  
  // MobileNavLink Component
  const MobileNavLink = ({ to, children, onClick }) => (
    <Link
      to={to}
      className="text-gray-700 hover:text-yellow-800 block px-4 py-3 rounded-md text-lg font-medium transition duration-300 border-l-4 border-transparent hover:border-yellow-500 hover:bg-yellow-50"
      onClick={onClick}
    >
      {children}
    </Link>
  );




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-blue-600">
             
               <img src="/images/logo.jpeg" alt="Vasudaika Logo" className="h-10 md:h-14 lg:h-16 xl:h-18 w-auto " /> 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/nri-contact">NRI Contact</NavLink>
          </div>

          {/* Phone Number - visible on larger screens */}
          <div className="hidden lg:flex items-center">
          <a href="tel:+917073755172" className="flex items-center text-gray-700 hover:text-yellow-800 transition duration-300">
            <div className="bg-yellow-500 rounded-full p-2 mr-2">
              <FaPhone className="text-white text-lg" />
           </div>
            <span className="text-yellow-700 text:lg font-bold">+91 70XX375XXXX</span>
          </a>
          </div>
          

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink to="/" onClick={toggleMenu}>Home</MobileNavLink>
              <MobileNavLink to="/projects" onClick={toggleMenu}>Projects</MobileNavLink>
              <MobileNavLink to="/about" onClick={toggleMenu}>About</MobileNavLink>
              <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
              <MobileNavLink to="/contact" onClick={toggleMenu}>Contact</MobileNavLink>
              <MobileNavLink to="/nri-contact" onClick={toggleMenu}>NRI Contact</MobileNavLink>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
                
            <a href="tel:+917073755172" className="flex items-center text-gray-700 hover:text-yellow-800 transition duration-300">
               <div className="bg-yellow-500 rounded-full p-2 mr-2">
                 <FaPhone className="text-white text-lg" />
               </div>
                <span className="text-yellow-700 text:lg font-bold">+91 70XX375XXXX</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar;