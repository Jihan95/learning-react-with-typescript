import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import  './MoviesDetailsPage.css';
import {Link} from 'react-router-dom';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`;
        axios.get(url)
            .then(res => setMovie(res.data))
            .catch(err => console.error("Error fetching movie:", err));
    }, [id]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movie-details-container">
            {/* Back button */}
            <Link to="/movies" className="back-button">← Back to Movies</Link>
            
            {/* Hero section with backdrop */}
            <div className="movie-hero" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}>
                <div className="hero-overlay">
                    <h1>{movie.title}</h1>
                    <div className="hero-meta">
                        <span>★ {movie.vote_average}/10</span>
                        <br />
                        <span>{movie.release_date}</span>
                        <br />
                        <span>{movie.runtime} mins</span>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="movie-content">
                <div className="poster-section">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title}
                        className="detail-poster"
                    />
                </div>
                
                <div className="info-section">
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    
                    <h2>Details</h2>
                    <div className="movie-facts">
                        <p><strong>Status:</strong> {movie.status}</p>
                        <p><strong>Original Language:</strong> {movie.original_language.toUpperCase()}</p>
                        <p><strong>Budget:</strong> ${movie.budget?.toLocaleString() || 'N/A'}</p>
                        <p><strong>Revenue:</strong> ${movie.revenue?.toLocaleString() || 'N/A'}</p>
                    </div>

                    <h2>Genres</h2>
                    <div className="genre-list">
                        {movie.genres?.map(genre => (
                            <span key={genre.id} className="genre-tag">
                                {genre.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
