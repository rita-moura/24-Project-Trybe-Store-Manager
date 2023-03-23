const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.createNewProduct);

module.exports = router;