const Joi = require('joi');
//validator users
const B_UserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string(),
});
const PxP_UserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  alamat: Joi.string(),
});
//validator auth
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
//validator lahan 
const LahanPayloadSchema = Joi.object({
  lokasi: Joi.string().required(),
  luas_m2: Joi.string(),
  status_hak_panen: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil').required(),
});
const LahanQuerySchema = Joi.object({
  lokasi: Joi.string(),
  luas_m2: Joi.string(),
  status_hak_panen: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil'),
});



module.exports = {
  //users
  PxP_UserPayloadSchema,
  B_UserPayloadSchema,
  //auth
  PostAuthPayloadSchema,
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,
  //lahan
  LahanPayloadSchema,
  LahanQuerySchema,

  };