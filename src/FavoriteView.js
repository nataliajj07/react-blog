import React, { useState, useEffect } from 'react';
import { getFromFirebase, deleteFromFirebase } from './helpers/firebaseHelpers';

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
                    <li key={movie.id}>
                        <div className='titulo'>
                            <p>{movie.data.title}</p>
                            <button>Update</button>
                            <button onClick={() => deleteFrom(movie.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteView;
