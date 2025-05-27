import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <Link to="/">Home</Link>
            <Link to="/movies">Go to Movies</Link>
            <Link to="/about">About us</Link>
        </div>
    );
}

export default Navbar;
