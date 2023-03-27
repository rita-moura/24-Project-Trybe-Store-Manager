const { salesModel, salesProductModel, productsModel } = require('../models');
const statusError = require('../utils/httpStatusErro');
const { dictionary, salesArraySchema } = require('./schemas/salesSchemas');

const insertSales = async (salesArray) => {
  const { error } = salesArraySchema.validate(salesArray);

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const productIds = await Promise.all(salesArray.map((sale) => productsModel
    .findProductById(sale.productId)));

  const verifyProductId = productIds.some((product) => !product);

  if (verifyProductId) { throw statusError(404, 'Product not found'); }
  
  const saleId = await salesModel.insertSales();
  
  await Promise.all(salesArray.map((sale) => salesProductModel
    .insertSales(saleId, sale)));

  return { id: saleId, itemsSold: salesArray };
};

module.exports = {
  insertSales,
};

// {
//   "id": 3,
//     "itemsSold": [
//       {
//         "productId": 1,
//         "quantity": 1
//       },
//       {
//         "productId": 2,
//         "quantity": 5
//       }
//     ]
// }