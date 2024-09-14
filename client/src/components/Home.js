import React from 'react';

const Home = () => {
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
                    <button>View Product</button>
                </div>

                <div className="product-highlight">
                    <img src="/images/img4.jpeg" alt="Product 2" />
                    <h3>Product 2</h3>
                    <p>Some quick description of Product 2</p>
                    <button>View Product</button>
                </div>

                <div className="product-highlight">
                    <img src="/images/img8.jpeg" alt="Product 3" />
                    <h3>Product 3</h3>
                    <p>Some quick description of Product 3</p>
                    <button>View Product</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
