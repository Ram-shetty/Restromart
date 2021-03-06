import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink  to ="/" exact>HOME</NavLink>
    </li>
    <li>
      <NavLink  to ="/about">ABOUT</NavLink>
    </li>
    <li>
      <NavLink  to ="/signup">SIGNUP</NavLink>
    </li>
    <li>
      <NavLink  to ="/login">LOGIN</NavLink>
    </li>
  </ul>
};

export default NavLinks;