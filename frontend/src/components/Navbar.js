import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="brand">Myntra</div>
      <div className="menu">
        <Link to="/explore">Explore</Link>
        <Link to="/trending">#Trending</Link>
        <Link to="/profiles">Profiles</Link>
      </div>
    </div>
  );
};

export default Navbar;
