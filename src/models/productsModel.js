const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return products;
};

const findById = async (productId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );

  return products;
};

const insert = async (name) => {
  const [{ insertId: id }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );

  return {
    id,
    name,
  };
};

module.exports = {
  findAll,
  findById,
  insert,
};