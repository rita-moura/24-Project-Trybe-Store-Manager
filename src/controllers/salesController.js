const { salesService } = require('../services');

const insertSales = async (req, res, next) => {
  try {
    const sales = req.body;
    const newSales = await salesService.insertSales(sales);

    // if (type) return res.status(400).json({ message: `${message}` });

    return res.status(201).json(newSales);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertSales,
};