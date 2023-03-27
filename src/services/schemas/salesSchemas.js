const Joi = require('joi');

const saleSchema = Joi.object({
  productId: Joi.number().min(1).required().label('productId'),
  quantity: Joi.number().min(1).required().label('quantity'),
}).messages({
  'any.required': '{{#label}} is required',
  'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
});

const dictionary = {
  'number.min': 422,
  'any.required': 400,
};

const salesArraySchema = Joi.array().items(saleSchema);

module.exports = {
  dictionary,
  salesArraySchema,
};