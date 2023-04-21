import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogList.css'
import { FaRegStar } from "react-icons/fa";
import { addToFirebase } from './helpers/firebaseHelpers';

function BlogList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://imdb-top-100-movies.p.rapidapi.com/',
      headers: {
        'X-RapidAPI-Key': '9519c6a328msheec59aafa1e8b80p1306bbjsn720957386266',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setMovies(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const addToFavorites = async (movieId, title) => {
    addToFirebase("favorites",{movieId,title});
  };
  
  return (
    <div className='bloglist'>
      <h1>Top 100 Movies of All Time</h1>
      <ul>
        {movies.map(movie => (
        <div className='container'>
          <li key={movie.id}>
            <img src={movie.thumbnail} alt={movie.title} />
            <div className='titulo'>
              <Link to={`/blogpost/${movie.id}`}>{movie.title}</Link>
              <FaRegStar className='fav' onClick={() => addToFavorites(movie.id, movie.title)}/>
            </div>
          </li>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;