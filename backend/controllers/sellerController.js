const pool = require('../db');

// Add a new product
exports.addProduct = async (req, res) => {
    const { name, category, description, price, discount } = req.body;
    const sellerId = req.user.id; // From the authentication middleware

    // Validate required fields
    if (!name || !category || !price) {
        return res.status(400).json({ message: "Name, category, and price are required." });
    }

    try {
        const result = await pool.query(
            `INSERT INTO products (seller_id, name, category, description, price, discount)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [sellerId, name, category, description, price, discount]
        );
        res.status(201).json({ message: "Product added successfully", product: result.rows[0] });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Error adding product" });
    }
};

// Edit a product
exports.editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, price, discount } = req.body;
    const sellerId = req.user.id; // From the authentication middleware

    try {
        const result = await pool.query(
            `UPDATE products 
             SET name = $1, category = $2, description = $3, price = $4, discount = $5
             WHERE id = $6 AND seller_id = $7 RETURNING *`,
            [name, category, description, price, discount, id, sellerId]
        );

        if (!result.rows.length) {
            return res.status(404).json({ message: "Product not found or you're not authorized to edit this product" });
        }

        res.json({ message: "Product updated successfully", product: result.rows[0] });
    } catch (error) {
        console.error("Error editing product:", error);
        res.status(500).json({ message: "Error editing product" });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const sellerId = req.user.id; // From the authentication middleware

    try {
        const result = await pool.query(`DELETE FROM products WHERE id = $1 AND seller_id = $2 RETURNING *`, [id, sellerId]);

        if (!result.rows.length) {
            return res.status(404).json({ message: "Product not found or you're not authorized to delete this product" });
        }

        res.status(204).send(); // Successful deletion, no content returned
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product" });
    }
};

