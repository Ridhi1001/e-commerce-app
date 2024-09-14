const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming your user model is in /models

const authenticateBuyer = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ id: decoded.id, role: 'buyer' });

        if (!user) {
            throw new Error('Not authorized as buyer');
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate as a buyer.' });
    }
};

module.exports = authenticateBuyer;
