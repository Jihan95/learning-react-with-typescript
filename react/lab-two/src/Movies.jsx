import { PureComponent } from "react";
import Movie from "./Movie";

class Movies extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {
            data: null,
            loading: true,
            error: null
        }
    }

    componentDidMount() {
        const apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7";

        fetch(apiUrl)
            .then(respone =>{
                if(!respone.ok){
                    throw new Error('Network response was not ok')
                }
                return respone.json();
            })
            .then(data => {
                this.setState ({
                    data: data.results,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loading: false
                });
            });
    }

    render () {
        const { data, loading, error } = this.state;

        if(loading) {
            return <div>Loading</div>;
        }

        if(error) {
            return <div>Error: {error}</div>
        }

        return (
            <div className="movie-container">
                {data.map((movie) => (
                    <Movie
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
        );
    }
}

export default Movies;