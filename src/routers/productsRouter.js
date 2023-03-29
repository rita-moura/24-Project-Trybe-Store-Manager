const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.findAllProduct);

router.get('/search', productsController.searchProduct);

router.get('/:id', productsController.findProductById);

router.post('/', productsController.insertProduct);

router.put('/:id', productsController.updatedProduct);

router.delete('/:id', productsController.deletedProduct);

module.exports = router;