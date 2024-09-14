const pool = require('../db');

// Add a new product
const addProduct = async (req, res) => {
    const { name, category, description, price, discount } = req.body;
    const sellerId = req.user.id;

    try {
        const result = await pool.query(
            `INSERT INTO products (seller_id, name, category, description, price, discount)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [sellerId, name, category, description, price, discount]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Error adding product" });
    }
};

// Edit a product
const editProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, description, price, discount } = req.body;
    const sellerId = req.user.id;

    try {
        const result = await pool.query(
            `UPDATE products SET name = $1, category = $2, description = $3, price = $4, discount = $5
       WHERE id = $6 AND seller_id = $7 RETURNING *`,
            [name, category, description, price, discount, id, sellerId]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: "Error editing product" });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const sellerId = req.user.id;

    try {
        await pool.query(`DELETE FROM products WHERE id = $1 AND seller_id = $2`, [id, sellerId]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting product" });
    }
};

module.exports = { addProduct, editProduct, deleteProduct };
