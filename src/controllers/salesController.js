const newSale = async (_req, res, next) => {
  try {
    return res.status(201).json({ message: '' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  newSale,
};