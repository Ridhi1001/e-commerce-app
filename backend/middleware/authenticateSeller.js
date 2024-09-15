const jwt = require('jsonwebtoken');
const pool = require('../db'); // Using PostgreSQL connection pool for querying

exports.authenticateSeller = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Authorization token is required.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const result = await pool.query(`SELECT * FROM users WHERE id = $1 AND role = 'seller'`, [decoded.id]);

        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ message: 'Not authorized as a seller' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Seller authentication error:", error);
        res.status(401).json({ message: 'Please authenticate as a seller.' });
    }
};
