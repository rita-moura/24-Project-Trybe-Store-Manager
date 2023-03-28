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

const updatedSale = async ({ productId, quantity }, id) => {
  const query = `UPDATE StoreManager.sales_products SET quantity = ?
  WHERE sale_id = ? and product_id = ?`;
  const [sale] = await connection.execute(query, [quantity, id, productId]);

  return sale;
};

const deletedSale = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';

  const [deleted] = await connection.execute(query, [id]);

  return deleted.affectedRows;
};

module.exports = {
  insertSales,
  findAllSales,
  findSalesById,
  deletedSale,
  updatedSale,
};