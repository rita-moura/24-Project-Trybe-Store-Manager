const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(404).json(message);

  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(404).json({ message: `${message}` });

  return res.status(200).json(message);
};

const createNewProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.createProduct(name);

  if (!name) return res.status(400).json({ message: `${message}` });

  if (type) return res.status(422).json({ message: `${message}` });

  return res.status(201).json(message);
};

module.exports = {
  listProducts,
  getProductById,
  createNewProduct,
};