import MovieCard from '../components/MovieCard';
import { useContext } from 'react';
import { moviesContext } from '../contexts/MoviesContextProvider';
import './MoviesPage.css';

const MoviesPage = () => {
    const movies = useContext(moviesContext);

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
