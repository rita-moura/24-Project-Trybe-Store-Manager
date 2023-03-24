// const { productsModel } = require('../../models');
const statusError = require('../../utils/httpStatusErro');
const { idSchema, nameSchema, salesArraySchema, statusCode } = require('./schemas');

const isValidId = (productId) => {
  const { error } = idSchema.validate(productId);

  if (error) return { type: 'INVALID_VALUE', message: 'id deve ser uma número' };

  return { type: null, message: '' };
};

const isValidNewProduct = (name) => {
  const { error } = nameSchema.validate({ name });

  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const isValidNewSale = (salesArray) => {
  const { error } = salesArraySchema.validate(salesArray);

  if (error) { throw statusError(statusCode[error.details[0].type], error.message); }

  return { type: null, message: '' };
};

// const isValidProdcutId = async (salesArray) => {
//   const productId = await Promise.all(salesArray.map((sale) => productsModel
//     .findProductById(sale.productId)));
  
//   const prodcutIdInvalid = productId.some((product) => !product);

//   if (prodcutIdInvalid) = 
// };

module.exports = {
  isValidId,
  isValidNewProduct,
  isValidNewSale,
};