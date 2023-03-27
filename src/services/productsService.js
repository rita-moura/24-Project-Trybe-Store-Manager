const { productsModel } = require('../models');
const statusError = require('../utils/httpStatusErro');
const { dictionary, validationProduct } = require('./schemas/productsSchemas');

const findAllProduct = async () => {
  const products = await productsModel.findAllProduct();

  return products;
};

const findProductById = async (id) => {
  const product = await productsModel.findProductById(id);

  if (!product) { throw statusError(404, 'Product not found'); }

  return product;
};

const insertProduct = async (name) => {
  const { error } = validationProduct([{ name }]);

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const newProduct = await productsModel.insertProduct(name);

  return newProduct;
};

const updatedProduct = async (id, name) => {
  const { error } = validationProduct([{ name }]);

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const product = await productsModel.findProductById(id);

  if (!product) { throw statusError(404, 'Product not found'); }

  await productsModel.updatedProduct(id, name);

  return { id, name };
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
  updatedProduct,
};