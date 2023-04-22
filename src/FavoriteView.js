import React, { useState, useEffect } from 'react';
import { getFromFirebase, deleteFromFirebase } from './helpers/firebaseHelpers';
import './FavoriteView.css'
import { FaTrashAlt } from "react-icons/fa";

function FavoriteView() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getFromFirebase('favorites');
            setMovies(result);
        };
        fetchData();
    }, []);

    const deleteFrom = async (movieId) => {
        await deleteFromFirebase('favorites', movieId);
        setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
    };

    return (
        <div className='favoriteview'>
            <h1>My Favorite Movies</h1>
            <ul>
                {movies.map(movie => (
                    <div className='container'>
                    <li key={movie.id}>
                        <img src={movie.data.movieThumbnail} />
                        <div className='titulo'>
                            <p>{movie.data.title}</p>
                            <FaTrashAlt className='button-del' onClick={() => deleteFrom(movie.id)} />
                        </div>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteView;
