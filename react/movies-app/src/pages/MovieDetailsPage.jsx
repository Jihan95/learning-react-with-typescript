import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import './MoviesDetailsPage.css';
import { moviesContext } from "../contexts/MoviesContextProvider";
import { useSelector, useDispatch } from "react-redux";
import { addtomyFavouritesAction, removeFromFavouritesAction } from "../redux/slices/myFavouritesSlice";

const MovieDetailsPage = () => {
    const { id } = useParams();
    const movies = useContext(moviesContext);
    const [movie, setMovie] = useState(null);
    const {value} = useSelector((state) => state.myFavourites);

    const dispatch = useDispatch();

    useEffect(() => {
        const foundMovie = movies.find(m => String(m.id) === id);
        setMovie(foundMovie);
    }, [id, movies]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    const isFavourite = value.some(fav => fav.id === movie.id);
    return (
        <div className="movie-details-container">
            <div className="movie-hero" style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
            }}>
                <div className="hero-overlay">
                    <h1 className="movie-title">{movie.title}</h1>
                    <div className="hero-meta">
                        <span className="rating">★ {movie.vote_average}/10</span>
                        <span className="release-date">{movie.release_date}</span>
                    </div>
                </div>
            </div>

            <div className="movie-content">
                
                <div className="info-section">
                    <h2 className="section-heading">Overview</h2>
                    <p className="overview">{movie.overview}</p>
                    
                    <h2 className="section-heading">Details</h2>
                    <p className="language"><strong>Original Language:</strong> {movie.original_language.toUpperCase()}</p>
                    <p className="popularity"><strong>Popularity:</strong> {Math.round(movie.popularity)}</p>

                    {movie.genres?.length > 0 && (
                        <>
                            <h2 className="section-heading">Genres</h2>
                            <div className="genre-list">
                                {movie.genres.map(genre => (
                                    <span key={genre.id} className="genre-tag">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    {isFavourite ? (
                        <button className="favorite-button" onClick={() => {dispatch(removeFromFavouritesAction(movie))}}>
                            Remove From Favourites
                        </button>
                    ) : (
                        <button className="favorite-button" onClick={() => {dispatch(addtomyFavouritesAction(movie))}}>
                            Add to Favourites
                        </button>

                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default MovieDetailsPage;
