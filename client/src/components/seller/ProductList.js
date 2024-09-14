import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/api/seller/products');
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`/api/seller/delete/${productId}`);
            fetchProducts(); // Refresh product list after deletion
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {editingProduct ? (
                <ProductForm product={editingProduct} onProductSaved={() => {
                    setEditingProduct(null);
                    fetchProducts();
                }} />
            ) : (
                <ProductForm onProductSaved={fetchProducts} />
            )}

            <h2>Your Products</h2>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product.id} className="product-list">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <button onClick={() => setEditingProduct(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
