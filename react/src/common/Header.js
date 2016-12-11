import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <ul className="sui-navbar">
        <li><IndexLink to="/" activeClassName="sui-active">Home</IndexLink> </li>
        <li><Link to="/about" activeClassName="sui-active">About Us</Link></li>
        <li><Link to="/contact" activeClassName="sui-active">Contact Us</Link></li>
      </ul>
    </nav>
  );
};
export default Header;
