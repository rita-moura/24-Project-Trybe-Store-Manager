const express = require('express');
const { productsController } = require('../controllers');
const { verifyErrorListProduct, verifyIdInvalid, verifyInputValue } = require('../middlewares');

const router = express.Router();

router.get('/', verifyErrorListProduct, productsController.listProducts);

router.get('/:id', verifyIdInvalid, productsController.getProductById);

router.post('/', verifyInputValue, productsController.createNewProduct);

module.exports = router;