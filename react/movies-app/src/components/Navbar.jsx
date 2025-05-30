import {Link} from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {value} = useSelector((state) => state.myFavourites);
    return (
        <div className='navbar-container'>
            <Link to="/">Home</Link>
            <Link to="/movies">Go to Movies</Link>
            <Link to="/about">About us</Link>
            <Link to="/favourites">&#10084; My Favourites ({value.length})</Link>
        </div>
    );
}

export default Navbar;
