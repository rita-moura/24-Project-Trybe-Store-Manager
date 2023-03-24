const { productsService } = require('../services');

const verifyErrorListProduct = async (_req, res, next) => {
  const { type, message } = await productsService.findAllProduct();

  if (type) return res.status(404).json(message);

  next();
};

const verifyIdInvalid = async (req, res, next) => {
  const { id } = req.params;
  const { type, message } = await productsService.findProductById(id);

  if (type) return res.status(404).json({ message: `${message}` });

  next();
};

const verifyInputValue = async (req, res, next) => {
  const { name } = req.body;
  const { message } = await productsService.insertProduct();

  if (!name) return res.status(400).json({ message: `${message}` });

  next();
};

module.exports = {
  verifyErrorListProduct,
  verifyIdInvalid,
  verifyInputValue,
};