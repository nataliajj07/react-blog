import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <h1>Movie Blog</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to= "/favoriteview">Favorites</Link>
        <a href="https://www.cuevana.be" target='_blank'>More Movies</a>
      </div>
    </nav>
  );
}

export default Navbar;