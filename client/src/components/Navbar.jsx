import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-4 border-blue-900 text-center fixed top-0 bg-blue-800 font-bold w-full text-lg text-white">
      <ul>
        <li className="inline-block py-4">
        <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
          <Link to="/articles-list" className="pl-6 pr-8">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;