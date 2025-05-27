const Movie = ({id, title}) => {
    let styleObject = {
        backgroundColor: "skyblue",
        margin: "20px",
        padding: "10px"
    }
    return (
        <div style={styleObject}>
            <h3>id: {id}</h3>
            <p>title: {title}</p>
        </div>
    );
}

export default Movie;