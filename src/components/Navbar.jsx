import React, { useState } from 'react';
import {
  FaSearch,
  FaUser,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: 'Jewelry & Accessories', path: '/' },
    { title: 'Clothing & Shoes', path: '/' },
    { title: 'Home & Living', path: '/' },
    { title: 'Wedding & Party', path: '/' },
    { title: 'Toys & Entertainment', path: '/' },
    { title: 'Art & Collectibles', path: '/' },
    { title: 'Craft Supplies & Tools', path: '/' },
  ];

  return (
    <header className="mx-w-screen-2xl xl:px-28 px-4  ">
      <nav className="flex justify-between items-center containe md:py-4 pt-6 pb-4">
        <FaSearch className="text-Black w-7 h-7 cursor-pointer hidden md:block" />

        {/* logo */}

        <Link to="/">
          <h1 className="text-2xl mt-5 mb-5 text-slate-700 font-extrabold">
            ꧁•⊹٭V O G U E V E X٭⊹•꧂
          </h1>
        </Link>

        {/* account and shopping btn */}
        <div className="text-xl text-Black sm:flex items-center gap-8 hidden font-light">
          <Link to="/" className="flex items-center gap-2 hover:text-orange-500">
            <FaUser />
            Account
          </Link>
          <Link to="/" className="flex items-center gap-2 hover:text-orange-500">
            <FaShoppingBag />
            Shopping
          </Link>
        </div>

        {/* navbar for sm devices */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>

      <hr />

      {/* category items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500 font-medium">
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* only mobile menu items */}
      <div>
        <ul
          className={`bg-Black text-white px-4 py-2 rounded ${
            isMenuOpen ? '' : 'hidden'
          }`}
          aria-hidden={!isMenuOpen}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
