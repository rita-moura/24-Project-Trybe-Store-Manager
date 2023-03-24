const { productsService } = require('../services');

const findAllProduct = async (_req, res, next) => {
  try {
    const { message } = await productsService.findAllProduct();

    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const findProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = await productsService.findProductById(id);

    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

const insertProduct = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { type, message } = await productsService.insertProduct(name);

    if (type) return res.status(422).json({ message: `${message}` });
    
    return res.status(201).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
};