import { useState } from "react";
import Movie from "./Movie";

const Movies = () => {
    let [movies] = useState([
        {id:1, title:"movie 1"},
        {id:2, title:"movie 2"},
        {id:3, title:"movie 3"},
        {id:4, title:"movie 4"},
    ])
    return (
        <div>
            {
                movies.map((movie) => {
                    return <Movie key={movie.id} {...movie}></Movie>
                })
            }
        </div>
    )
}

export default Movies;