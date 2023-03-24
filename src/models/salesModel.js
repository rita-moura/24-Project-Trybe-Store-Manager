const connection = require('./connection');

const salesId = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES(now())';

  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

module.exports = {
  salesId,
};