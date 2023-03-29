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

const updatedProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';

  const [product] = await connection.execute(query, [name, id]);

  return product;
};

const deletedProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';

  const [deleted] = await connection.execute(query, [id]);

  return deleted.affectedRows;
};

const searchProduct = async (term) => {
  const query = 'SELECT * FROM products WHERE name LIKE ? ORDER BY id';

  const [search] = await connection.execute(query, [`%${term}%`]);

  return search;
};

module.exports = {
  findAllProduct,
  findProductById,
  insertProduct,
  updatedProduct,
  deletedProduct,
  searchProduct,
};