const Joi = require('joi');

const isSchema = Joi.number().integer().min(1).required();

module.exports = {
  isSchema,
};