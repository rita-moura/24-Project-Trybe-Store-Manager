const { idSchema } = require('./schemas');

const isValidId = (productId) => {
  const { error } = idSchema.validate(productId);

  if (error) return { type: 'INVALID_VALUE', message: 'id deve ser uma número' };

  return { type: null, message: '' };
};

module.exports = {
  isValidId,
};