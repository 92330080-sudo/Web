import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/animals">Animals</Link>
      <Link to="/employees">Employees</Link>
       <Link to="/Test">Test</Link>
    </nav>
  );
}

export default Navbar;
