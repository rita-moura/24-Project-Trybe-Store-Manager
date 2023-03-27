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

const insertProduct = async (product) => {
  const { error } = validationProduct({ name: product });

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const newProduct = await productsModel.insertProduct(product);

  return newProduct;
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
};