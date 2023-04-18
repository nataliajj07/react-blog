import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <h1>Blog de Películas</h1>
      <div className='links'>
        <Link to="/">Inicio</Link>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank'>Favoritos</a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target='_blank'>Más peliculas</a>
      </div>
    </nav>
  );
}

export default Navbar;