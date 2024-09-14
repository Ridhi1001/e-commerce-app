import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: 'buyer',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signup', user);
            console.log('User signed up successfully', response.data);
        } catch (error) {
            console.error('Error signing up:', error.response.data.message);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                className="input"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                className="input"
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <select name="role" value={user.role} onChange={handleChange}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
            </select>
            <button className="button" type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
