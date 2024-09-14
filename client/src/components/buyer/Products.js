import React, { useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/buyer/search?query=${query}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error searching products:", error);
        }
    };

    return (
        <div className="product-list">
            <input
                type="text"
                placeholder="Search products by name or category"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-list">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Discount: {product.discount}%</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
