import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">
                <FaShoppingCart /> {/* Cart Icon */}
            </Link>
        </nav>
    );
};

export default Navbar;
