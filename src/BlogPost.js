import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://imdb-top-100-movies.p.rapidapi.com/`+id,
      params: {id: id},
      headers: {
        'X-RapidAPI-Key': '9519c6a328msheec59aafa1e8b80p1306bbjsn720957386266',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      setMovie(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [id]);

  return (
    <div className="blog-post">
      <h2>{movie.title}</h2>
      <img src={movie.thumbnail} alt={movie.title} />
      <p><strong>Descripción: </strong>{movie.description}</p>
      <p><strong>Director: </strong> {movie.director}</p>
      <p><strong>Genre: </strong> {movie.genre}</p>
      <p><strong>Writers: </strong> {movie.writers}</p>
      <p><strong>Year: </strong> {movie.year}</p>
      <p><strong>Rating: </strong> {movie.rating}</p>
    </div>
  );
}

export default BlogPost;