import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './Navbar.css';

const Navbar = () => (
  <nav className="navBar">
    <Header />
    <ul className="links">
      <li className="link">
        <Link to="/">Rockets</Link>
      </li>
      <li className="link">
        <Link to="/missions">Missions</Link>
      </li>
      <li className="link">
        <Link to="/myProfile">My Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
