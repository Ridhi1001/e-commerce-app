const express = require('express');
const { addProduct, editProduct, deleteProduct } = require('../controllers/sellerController');
const { authenticateSeller } = require('../middleware/authenticateSeller');
const router = express.Router();

// Route to add a product
router.post('/add', authenticateSeller, addProduct);

// Route to edit a product
router.put('/edit/:id', authenticateSeller, editProduct);

// Route to delete a product
router.delete('/delete/:id', authenticateSeller, deleteProduct);

module.exports = router;
