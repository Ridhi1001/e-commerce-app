const pool = require('../db');

// Search for products by name or category
const searchProducts = async (req, res) => {
    const { query } = req.query;

    try {
        const result = await pool.query(
            `SELECT * FROM products WHERE name ILIKE $1 OR category ILIKE $1`,
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ message: "Error searching for products" });
    }
};

// Add product to cart
const addToCart = async (req, res) => {
    const { productId } = req.body;
    const buyerId = req.user.id;

    try {
        const result = await pool.query(
            `INSERT INTO cart (buyer_id, product_id) VALUES ($1, $2) RETURNING *`,
            [buyerId, productId]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Error adding product to cart" });
    }
};

// Remove product from cart
const removeFromCart = async (req, res) => {
    const { productId } = req.params;
    const buyerId = req.user.id;

    try {
        await pool.query(`DELETE FROM cart WHERE buyer_id = $1 AND product_id = $2`, [buyerId, productId]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error removing product from cart" });
    }
};

module.exports = { searchProducts, addToCart, removeFromCart };
