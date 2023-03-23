const { idSchema, nameSchema } = require('./schemas');

const isValidId = (productId) => {
  const { error } = idSchema.validate(productId);

  if (error) return { type: 'INVALID_VALUE', message: 'id deve ser uma número' };

  return { type: null, message: '' };
};

const isValidNewProduct = (name) => {
  const { error } = nameSchema.validate({ name });

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { tyep: null, message: '' };
};

module.exports = {
  isValidId,
  isValidNewProduct,
};