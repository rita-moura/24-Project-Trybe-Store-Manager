const { salesService } = require('../services');

const insertSales = async (req, res, next) => {
  try {
    const sales = req.body;
    const newSales = await salesService.insertSales(sales);
    return res.status(201).json(newSales);
  } catch (error) {
    next(error);
  }
};

const findAllSales = async (_req, res, next) => {
  try {
    const sales = await salesService.findAllSales();
    return res.status(200).json(sales);
  } catch (error) {
    next(error);
  }
};

const findSalesById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sale = await salesService.findSalesById(id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const updatedSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const saleUpdate = req.body;

    const newSale = await salesService.updatedSale(saleUpdate, id);

    return res.status(200).json(newSale);
  } catch (error) {
    next(error);
  }
};

const deletedSale = async (req, res, next) => {
  try {
    const { id } = req.params;

    await salesService.deletedSale(id);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertSales,
  findAllSales,
  findSalesById,
  deletedSale,
  updatedSale,
};