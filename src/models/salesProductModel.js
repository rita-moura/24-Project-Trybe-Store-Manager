const connection = require('./connection');

const insertSales = async (saleId, { productId, quantity }) => {
  const query = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES(?, ?, ?)`;

  console.log(saleId, productId, quantity);
  const newSales = await connection.execute(query, [saleId, productId, quantity]);

  return newSales;
};

module.exports = {
  insertSales,
};