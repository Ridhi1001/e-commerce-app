const express = require('express');
const { searchProducts, addToCart, removeFromCart } = require('../controllers/buyerController');
const authenticateBuyer = require('../middleware/authenticateBuyer'); // Middleware to check if the user is a buyer
const router = express.Router();

// Search products
router.get('/search', searchProducts);

// Add to cart
router.post('/cart', authenticateBuyer, addToCart);

// Remove from cart
router.delete('/cart/:productId', authenticateBuyer, removeFromCart);

module.exports = router;
