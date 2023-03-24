const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.object({
  name: Joi.string().min(5).required().label('name'),
});

const saleSchema = Joi.object({
  productId: Joi.number().min(1).required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '{{label}} must be greater than or equal to {{#limit}}',
});

const statusCode = {
  'number.min': 422,
  'any.required': 400,
};

const salesArraySchema = Joi.array().items(saleSchema);

module.exports = {
  idSchema,
  nameSchema,
  saleSchema,
  salesArraySchema,
  statusCode,
};