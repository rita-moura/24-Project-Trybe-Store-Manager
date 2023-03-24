const { productsModel } = require('../models');
const schema = require('./validations/validationsInputs');

const findAllProduct = async () => {
  const products = await productsModel.findAllProduct();

  return { type: null, message: products };
};

const findProductById = async (productId) => {
  const error = schema.isValidId(productId);

  if (error.type) return error;

  const product = await productsModel.findProductById(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const insertProduct = async (product) => {
  const error = schema.isValidNewProduct(product);

  if (error.type) return error;

  const newProductId = await productsModel.insertProduct(product);

  const newProduct = await productsModel.findProductById(newProductId.id);

  return { type: null, message: newProduct };
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
};