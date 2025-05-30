import axios from 'axios';
import {  createContext, useState, useEffect } from 'react';
// import {v4 as uuid} from "uuid";


export const moviesContext = createContext();

const MoviesContextProvider = ({children}) => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(apiUrl)
            .then(res => setMovies(res.data.results))
            .catch(err => console.error("Error fetching movies:", err));
    }, []);

    return(
        <moviesContext.Provider value={movies}>
            {children}
        </moviesContext.Provider>
    );
}

export default MoviesContextProvider;
