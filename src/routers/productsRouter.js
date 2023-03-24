const express = require('express');
const { productsController } = require('../controllers');
const { verifyErrorListProduct, verifyIdInvalid, verifyInputValue } = require('../middlewares');

const router = express.Router();

router.get('/', verifyErrorListProduct, productsController.findAllProduct);

router.get('/:id', verifyIdInvalid, productsController.findProductById);

router.post('/', verifyInputValue, productsController.insertProduct);

module.exports = router;