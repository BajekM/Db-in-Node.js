const express = require('express');
const router = express.Router();
// const ObjectId = require('mongodb').ObjectId;
const Product = require('../models/product.model');
const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
router.get('/products/random', ProductController.getRandom);
router.get('/products/:id', ProductController.getById);
router.post('/products', ProductController.addNew);
router.put('/products/:id', ProductController.modify);
router.delete('/products/:id' , ProductController.delete);

module.exports = router;