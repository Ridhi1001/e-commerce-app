const jwt = require('jsonwebtoken');
const pool = require('../db'); // Assuming you're using PostgreSQL and pool

exports.authenticateBuyer = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ message: 'Authorization token required.' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const result = await pool.query(`SELECT * FROM users WHERE id = $1 AND role = 'buyer'`, [decoded.id]);

        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ message: 'Not authorized as a buyer' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(401).send({ error: 'Please authenticate as a buyer.' });
    }
};
