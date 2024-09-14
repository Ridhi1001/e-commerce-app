const express = require('express');
const { addProduct, editProduct, deleteProduct } = require('../controllers/sellerController');
const authenticateSeller = require('../middleware/authenticateSeller');
const router = express.Router();

// Add product
router.post('/add', authenticateSeller, addProduct);

// Edit product
router.put('/edit/:id', authenticateSeller, editProduct);

// Delete product
router.delete('/delete/:id', authenticateSeller, deleteProduct);

module.exports = router;
