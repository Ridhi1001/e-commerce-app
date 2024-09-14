import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async () => {
        try {
            const response = await axios.get('/api/buyer/cart');
            setCartItems(response.data);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const handleRemoveFromCart = async (productId) => {
        try {
            await axios.delete(`/api/buyer/cart/${productId}`);
            fetchCartItems(); // Refresh cart after removal
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.product_id}>
                        <h3>{item.product_name}</h3>
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemoveFromCart(item.product_id)}>Remove from Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
