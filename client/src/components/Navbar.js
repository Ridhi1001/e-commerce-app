import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/seller">Seller Dashboard</Link>
            <Link to="/buyer">Buyer Dashboard</Link>
        </nav>
    );
};

export default Navbar;
