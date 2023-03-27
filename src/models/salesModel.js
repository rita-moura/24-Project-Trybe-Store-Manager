const connection = require('./connection');

const insertSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(now())';

  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

const findAllSales = async () => {
  const query = `SELECT id as saleId, date, product_id as productId, quantity
    FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products
    ON id = sale_id`;
  
  const [sales] = await connection.execute(query);

  return sales;
};

const findSalesById = async (id) => {
  const query = `SELECT date, product_id AS productId, quantity FROM StoreManager.sales 
    INNER JOIN StoreManager.sales_products ON id = sale_id WHERE id = ?`;

  const [sales] = await connection.execute(query, [id]);

  return sales;
};

module.exports = {
  insertSales,
  findAllSales,
  findSalesById,
};