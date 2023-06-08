const Joi = require('joi');
 
const B_UserPayloadSchema = Joi.object({
  nama_pengguna: Joi.string().required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string(),
});

const PxP_UserPayloadSchema = Joi.object({
  nama_pengguna: Joi.string().required(),
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  alamat: Joi.string(),
});

module.exports = { 
  PxP_UserPayloadSchema,
  B_UserPayloadSchema,
  };