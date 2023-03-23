const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

module.exports = {
  idSchema,
  nameSchema,
};