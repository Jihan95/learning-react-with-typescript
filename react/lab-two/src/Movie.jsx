const Movie = ({title, poster_path, overview, vote_average, release_date}) => {
    let styleObject = {
        backgroundColor: "grey",
        margin: "20px",
        padding: "10px",
        borderRadius: "8px",
        width: "300px"
    }

    const posterUrl = poster_path 
        ? `https://image.tmdb.org/t/p/w300${poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Poster';


    return (
        <div style={styleObject}>
            <div className="movie" style={{textAlign: "center"}}>
                <img src={posterUrl} alt={title} width={"300px"} height={"350px"}/>
                <h2> {title} </h2>
                <p> {overview} </p>
                <div className="movie-info">
                    <p>Vote Average: {vote_average}</p>
                    <p> Release Date: {release_date}</p>
                </div>
            </div>
        </div>
    );
}

export default Movie;