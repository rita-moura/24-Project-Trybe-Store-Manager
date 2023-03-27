const connection = require('./connection');

const insertSales = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(now())';

  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

module.exports = {
  insertSales,
};