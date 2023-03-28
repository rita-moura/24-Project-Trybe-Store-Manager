const { salesModel, salesProductModel, productsModel } = require('../models');
const statusError = require('../utils/httpStatusErro');
const { dictionary, salesArraySchema } = require('./schemas/salesSchemas');

const insertSales = async (salesArray) => {
  const { error } = salesArraySchema.validate(salesArray);

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const productIds = await Promise.all(salesArray.map((sale) => productsModel
    .findProductById(sale.productId)));
  
  const verifyProductId = productIds.some((product) => !product);

  if (verifyProductId) { throw statusError(404, 'Product not found'); }
  
  const saleId = await salesModel.insertSales();
  
  await Promise.all(salesArray.map((sale) => salesProductModel
    .insertSales(saleId, sale)));

  return { id: saleId, itemsSold: salesArray };
};

const findAllSales = async () => {
  const sales = await salesModel.findAllSales();

  return sales;
};

const findSalesById = async (id) => {
  const sale = await salesModel.findSalesById(id);

  if (sale.length === 0) { throw statusError(404, 'Sale not found'); }

  return sale;
};

const updatedSale = async (salesArrayUpdate, id) => {
  const { error } = salesArraySchema.validate(salesArrayUpdate);

  if (error) { throw statusError(dictionary[error.details[0].type], error.message); }

  const saleId = await salesModel.findSalesById(id);

  if (saleId.length === 0) { throw statusError(404, 'Sale not found'); }

  const productIds = await Promise.all(salesArrayUpdate.map((sale) => productsModel
    .findProductById(sale.productId)));

  const verifyProductId = productIds.some((product) => !product);

  if (verifyProductId) { throw statusError(404, 'Product not found'); }

  await Promise.all(salesArrayUpdate.map((sale) => salesModel.updatedSale(sale, id)));

  return { saleId: Number([id]), itemsUpdated: salesArrayUpdate };
};

const deletedSale = async (id) => {
  const sale = await salesModel.findSalesById(id);

  if (sale.length === 0) { throw statusError(404, 'Sale not found'); }

  const deleted = await salesModel.deletedSale(id);

  return deleted;
};

module.exports = {
  insertSales,
  findAllSales,
  findSalesById,
  deletedSale,
  updatedSale,
};
