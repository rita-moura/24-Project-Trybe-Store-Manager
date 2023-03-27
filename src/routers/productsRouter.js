const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAllProduct);

router.get('/:id', productsController.findProductById);

router.post('/', productsController.insertProduct);

router.put('/:id', productsController.updatedProduct);

module.exports = router;