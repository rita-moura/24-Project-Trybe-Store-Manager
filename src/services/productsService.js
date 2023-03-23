const { productsModel } = require('../models');
const schema = require('./validations/validationsInputs');

const findAll = async () => {
  const products = await productsModel.findAll();

  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = schema.isValidId(productId);

  if (error.type) return error;

  const product = await productsModel.findById(productId);

  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const createProduct = async (product) => {
  const error = schema.isValidNewProduct(product);

  if (error.type) return error;

  const newProductId = await productsModel.insert(product);

  const newProduct = await productsModel.findById(newProductId.id);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};