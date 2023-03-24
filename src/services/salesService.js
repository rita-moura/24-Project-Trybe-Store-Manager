const { salesModel, salesProductModel } = require('../models');
const { isValidNewSale } = require('./validations/validationsInputs');

const insertSales = async (salesArray) => {
  const error = isValidNewSale(salesArray);

  if (error.type) return error;

  const saleId = await salesModel.salesId();
  
  const newSales = await Promise.all(salesArray.map((sale) => salesProductModel
    .insertSales(saleId, sale)));

  return { id: saleId, itemsSold: newSales };
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