import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ product, onProductSaved }) => {
    const [formData, setFormData] = useState({
        name: product?.name || '',
        category: product?.category || '',
        description: product?.description || '',
        price: product?.price || '',
        discount: product?.discount || '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (product) {
                // Edit product
                await axios.put(`/api/seller/edit/${product.id}`, formData);
            } else {
                // Add product
                await axios.post('/api/seller/add', formData);
            }
            onProductSaved();
        } catch (error) {
            console.error("Error saving product:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Category</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Discount</label>
                <input type="number" name="discount" value={formData.discount} onChange={handleChange} />
            </div>
            <button type="submit">{product ? "Edit Product" : "Add Product"}</button>
        </form>
    );
};

export default ProductForm;
