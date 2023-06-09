const Joi = require('joi');
 
const PostAuthPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  sandi: Joi.string().required(),
});
 
const PutAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
 
const DeleteAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
 
module.exports = {
  PostAuthPayloadSchema,
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,
};