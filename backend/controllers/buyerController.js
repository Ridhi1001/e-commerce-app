const pool = require('../db');

// Search for products by name or category
exports.searchProducts = async (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.status(400).json({ message: "Query is required to search for products." });
    }

    try {
        const result = await pool.query(
            `SELECT * FROM products WHERE name ILIKE $1 OR category ILIKE $1`,
            [`%${query}%`]
        );
        res.json(result.rows);
    } catch (error) {
        console.error("Error searching for products:", error);
        res.status(500).json({ message: "Error searching for products" });
    }
};

// Add product to cart
exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    if (!productId) {
        return res.status(400).json({ message: "Product ID is required to add to cart." });
    }
    const buyerId = req.user.id; // Assumes req.user is set by authenticateBuyer

    try {
        const result = await pool.query(
            `INSERT INTO cart (buyer_id, product_id) VALUES ($1, $2) RETURNING *`,
            [buyerId, productId]
        );
        res.status(201).json({ message: "Product added to cart successfully.", cartItem: result.rows[0] });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: "Error adding product to cart" });
    }
};

// Remove product from cart
exports.removeFromCart = async (req, res) => {
    const { productId } = req.params;
    if (!productId) {
        return res.status(400).json({ message: "Product ID is required to remove from cart." });
    }
    const buyerId = req.user.id; // Assumes req.user is set by authenticateBuyer

    try {
        await pool.query(`DELETE FROM cart WHERE buyer_id = $1 AND product_id = $2`, [buyerId, productId]);
        res.status(204).send();
    } catch (error) {
        console.error("Error removing product from cart:", error);
        res.status(500).json({ message: "Error removing product from cart" });
    }
};