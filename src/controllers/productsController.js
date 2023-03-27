const { productsService } = require('../services');

const findAllProduct = async (_req, res, next) => {
  try {
    const products = await productsService.findAllProduct();

    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productsService.findProductById(id);

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const insertProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newProduct = await productsService.insertProduct(name);

    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const updatedProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const newProduct = await productsService.updatedProduct(id, name);

    return res.status(200).json(newProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
  updatedProduct,
};