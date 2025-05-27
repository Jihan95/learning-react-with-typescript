import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesPage.css';

const MoviesPage = () => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error("Error fetching movies:", err));
    }, []);

    return (
        <div>
            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster_path={movie.poster_path}
                        overview={movie.overview}
                        vote_average={movie.vote_average}
                        release_date={movie.release_date}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default MoviesPage;
