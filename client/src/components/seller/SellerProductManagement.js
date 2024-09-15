import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const SellerProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('/products', {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            await axios.delete(`/delete/${productId}`, {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            });
            fetchProducts(); // Refresh products after deletion
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="product-management">
            <h2>Manage Your Products</h2>

            {editingProduct ? (
                <ProductForm product={editingProduct} onProductSaved={() => {
                    setEditingProduct(null);
                    fetchProducts();
                }} />
            ) : (
                <ProductForm onProductSaved={fetchProducts} />
            )}

            <ul>
                {products.map((product) => (
                    <li key={product.id}>
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

export default SellerProductManagement;
