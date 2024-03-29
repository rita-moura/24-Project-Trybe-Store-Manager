const Joi = require('joi');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required().label('name'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
});

const dictionary = {
  'string.min': 422,
  'any.required': 400,
};

const productsArraySchema = Joi.array().items(productsSchema);

const validationProduct = (product) => productsArraySchema.validate(product);

module.exports = {
  dictionary,
  validationProduct,
};