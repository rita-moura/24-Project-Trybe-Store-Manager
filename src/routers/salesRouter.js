const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

router.get('/', salesController.findAllSales);

router.get('/:id', salesController.findSalesById);

router.post('/', salesController.insertSales);

router.put('/:id', salesController.updatedSale);

router.delete('/:id', salesController.deletedSale);

module.exports = router;