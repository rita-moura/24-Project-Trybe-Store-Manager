const { productsService } = require('../services');

const verifyErrorListProduct = async (req, res, next) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(404).json(message);

  next();
};

const verifyIdInvalid = async (req, res, next) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(404).json({ message: `${message}` });

  next();
};

const verifyInputValue = async (req, res, next) => {
  const { name } = req.body;
  const { type, message } = await productsService.createProduct(name);

  if (!name) return res.status(400).json({ message: `${message}` });
  if (type) return res.status(422).json({ message: `${message}` });

  next();
};

module.exports = {
  verifyErrorListProduct,
  verifyIdInvalid,
  verifyInputValue,
};