const connection = require('./connection');

const insertSales = async (saleId, { productId, quantity }) => {
  const query = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES(?, ?, ?)`;

  const newSales = await connection.execute(query, [saleId, productId, quantity]);

  return newSales;
};

const findSalesById = async (productId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [productId],
  );

  return products;
};

module.exports = {
  insertSales,
  findSalesById,
};