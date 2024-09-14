const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming your user model is in /models

const authenticateSeller = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ id: decoded.id, role: 'seller' });

        if (!user) {
            throw new Error('Not authorized as seller');
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate as a seller.' });
    }
};

module.exports = authenticateSeller;
