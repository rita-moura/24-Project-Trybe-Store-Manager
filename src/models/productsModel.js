const connection = require('./connection');

const findAllProduct = async () => {
  const query = 'SELECT * FROM StoreManager.products ORDER BY id ASC';
  const [products] = await connection.execute(query);
  return products;
};

const findProductById = async (productId) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

  const [[products]] = await connection.execute(query, [productId]);

  return products;
};

const insertProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';

  const [{ insertId: id }] = await connection.execute(query, [name]);

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