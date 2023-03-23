const { productsService } = require('../services');

const listProducts = async (_req, res, next) => {
  try {
    const { message } = await productsService.findAll();

    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = await productsService.findById(id);

    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const createNewProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { type, message } = await productsService.createProduct(name);

    if (type) return res.status(422).json({ message: `${message}` });
    return res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listProducts,
  getProductById,
  createNewProduct,
};