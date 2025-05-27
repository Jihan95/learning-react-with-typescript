import {Link} from 'react-router-dom';


const MovieCard = ({id, title, poster_path, overview, vote_average, release_date}) => {
    let styleObject = {
        backgroundColor: "rgb(135, 88, 205)",
        margin: "20px",
        padding: "10px",
        borderRadius: "8px",
        width: "350px",
        color: "white"
    }

    const posterUrl = poster_path 
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Poster';


    return (
        <div style={styleObject}>
            <div className="movie" style={{textAlign: "center"}}>
                <img src={posterUrl} alt={title} width={"300px"} height={"350px"}/>
                <h2> {title} </h2>
                <pre>

                </pre>
                <p> {overview} </p>
                <div className="movie-info">
                    <p>★ {vote_average}/10</p>
                    <p> Release Date: {new Date(release_date).toLocaleDateString()}</p>
                </div>
                <Link to={`/movies/${id}`}>
                <button style={{ width: "100%", padding: "8px", marginTop: "10px" }}>See More</button>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;