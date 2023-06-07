const Joi = require('joi');
 
const B_UserPayloadSchema = Joi.object({
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('Laki-laki','perempuan').required(),
  domisili: Joi.string(),
});

const PxP_UserPayloadSchema = Joi.object({
  jenis_pengguna: Joi.string().valid('Perorangan', 'UMKM/KLP.Tani', 'CV', 'PT').required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  alamat: Joi.string(),
});

module.exports = { 
  PxP_UserPayloadSchema,
  B_UserPayloadSchema,
  };