const connection = require('./connection');

const findAllProduct = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return products;
};

const findProductById = async (productId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );

  return products;
};

const insertProduct = async (name) => {
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
  findAllProduct,
  findProductById,
  insertProduct,
};