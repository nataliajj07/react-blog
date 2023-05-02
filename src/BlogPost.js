import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css'
import { ListContext } from './ListContext';

function BlogPost() {

  const topFive = useContext(ListContext).list;

  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://imdb-top-100-movies.p.rapidapi.com/`+id,
      params: {id: id},
      headers: {
        'X-RapidAPI-Key': 'b14a393d22msh26cdbd1dadf7007p1ec4a7jsnc088cbaacef3',
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
      <div className='left'>
        
      </div>
      <div className='center'>
        <h2>{movie.title}</h2>
        <img src={movie.thumbnail} alt={movie.title} />
        <p><strong>Descripción: </strong>{movie.description}</p>
        <p><strong>Director: </strong> {movie.director}</p>
        <p><strong>Genre: </strong> {movie.genre}</p>
        <p><strong>Writers: </strong> {movie.writers}</p>
        <p><strong>Year: </strong> {movie.year}</p>
        <p><strong>Rating: </strong> {movie.rating}</p>
      </div>
      <div className='right'>
        <ul className='topfive-ul'>

          {topFive.map(item=>(
            <li key={item.id}>
              {item.data.title}  
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default BlogPost;