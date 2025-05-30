import { removeFromFavouritesAction } from '../redux/slices/myFavouritesSlice';
import './FavouritesPage.css';
import { useSelector, useDispatch } from 'react-redux';

const FavouritesPage = () => {
    const {value} = useSelector((state) => state.myFavourites);
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <h1>My Favourites</h1>
            {
                value.length == 0 ? 
                (<p style={{display:"flex", justifyContent:"center"}}>No favourites added yet!.</p>)
                : (
                    <ul style={{margin:"1rem"}}>
                        {
                            value.map(movie => (
                                <li key={movie.id} style={{margin:"1rem"}}>
                                    <span style={{marginRight:"0.5rem"}}>{movie.title}</span>
                                    <button style={{backgroundColor:"#E50914", padding:"5px", color:"black", borderRadius:"5px"}}
                                    onClick={() => dispatch(removeFromFavouritesAction(movie))}>
                                        Remove from Favourites
                                    </button>
                                </li>
                            )
                            )
                        }
                    </ul>

                )}
        </div>
    );
}

export default FavouritesPage
