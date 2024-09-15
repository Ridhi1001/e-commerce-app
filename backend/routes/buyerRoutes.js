const express = require('express');
const { searchProducts, addToCart, removeFromCart } = require('../controllers/buyerController');
const { authenticateBuyer } = require('../middleware/authenticateBuyer'); // Ensure this is correctly imported

const router = express.Router();

// Route to search products
router.get('/search', searchProducts);

// Route to add product to cart
router.post('/cart', authenticateBuyer, addToCart);

// Route to remove product from cart
router.delete('/cart/:productId', authenticateBuyer, removeFromCart);

module.exports = router;
