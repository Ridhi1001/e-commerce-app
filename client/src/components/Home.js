import React from 'react';
import axios from 'axios';

const Home = () => {
    const handleAddToCart = async (productId) => {
        try {
            await axios.post('/api/buyer/cart', { productId }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Product added to cart');
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };
    return (
        <div className="homepage">
            {/* Hero Section */}
            <div className="hero-section">
                <h1>Welcome to One Stop Shop</h1>
                <p>Explore the best products at unbeatable prices!</p>
                <button>Shop Now</button>
            </div>

            {/* Products Section */}
            <div className="products-section">
                <div className="product-highlight">
                    <img src="\images/img1.jpeg " alt="Product 1" />
                    <h3>Product 1</h3>
                    <p>Some quick description of Product 1</p>
                    <button onClick={() => handleAddToCart(1)}>Add to Cart</button>
                </div>

                <div className="product-highlight">
                    <img src="/images/img4.jpeg" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Some quick description of Product 2</p>
                    <button onClick={() => handleAddToCart(1)}>Add to Cart</button>
                </div>

                <div className="product-highlight">
                    <img src="/images/img8.jpeg" alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Some quick description of Product 3</p>
                    <button onClick={() => handleAddToCart(1)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
