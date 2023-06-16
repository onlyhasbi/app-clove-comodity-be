const Joi = require('joi');
//validator users
const BuruhUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/),
});
const AccUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/),
});
const UpdateBuruhUserPayloadSchema = Joi.object({
  nama: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/),
});
const UpdatePasswordAccUserPayloadSchema = Joi.object({
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/),
});
const UpdatePasswordBuruhUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  sandi: Joi.string().required(),
});
const UpdateAccUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  sandi: Joi.string().required(),
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
  lokasi: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/).required(),
  luas_m2: Joi.number(),
  status_hak_panen: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil').required(),
});
const LahanQuerySchema = Joi.object({
  lokasi: Joi.string().pattern(/^[a-zA-Z]{2}$-[0-9]{10}$/),
  luas_m2: Joi.string(),
  status_hak_panen: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil'),
});

//validator setoran 
const SetoranPayloadSchema = Joi.object({
  volume_liter: Joi.number().required(),
  berat_kg: Joi.string(),
  upah_rp: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil').required(),
  waktu: Joi.string(),
  catatan: Joi.string(),
});
const SetoranQuerySchema = Joi.object({
  volume_liter: Joi.string(),
  berat_kg: Joi.string(),
  upah_rp: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil').required(),
  waktu: Joi.string(),
  catatan: Joi.string(),
});

//validator Hasil_panen 
const HasilPanenPayloadSchema = Joi.object({
  berat_kg: Joi.string().required(),
  waktu: Joi.string().required(),
  catatan: Joi.string().required(),
});
const HasilPanenQuerySchema = Joi.object({
  berat_kg: Joi.string(),
  waktu: Joi.string(),
  catatan: Joi.string(),
});

//validator Hasil_panen ???? apakah pakai params, atau payload
//kau pakai params langsung ambil dari nila yang di get ke front ed saja, klu pakai payload nanti tidak valid dan rawan error
const LinkHasilSetoranPayloadSchema = Joi.object({

});

//validator Hasil_panen
const LinkSetoranBuruhPayloadSchema = Joi.object({

});
//validator jual_beli
const PenjualanPayloadSchema = Joi.object({
  id_pembeli : Joi.string().required(),
  jenis_komditas_cengkeh : Joi.string().valid('').required(),
  berat_kg : Joi.number().required(),
  harga_rp : Joi.number().required(),
  waktu : Joi.date().required(),
  catatan : Joi.string().required(),

});
const PembelianPayloadSchema = Joi.object({
  id_penjual : Joi.string().required(), 
  jenis_komditas_cengkeh : Joi.string().valid('').required(),
  berat_kg : Joi.number().required(),
  harga_rp : Joi.number().required(),
  waktu : Joi.date().required(),
  catatan : Joi.string().required(),

});
const penjualanPanenQuerySchema = Joi.object({
  id_pembeli : Joi.string().required(),
  jenis_komditas_cengkeh : Joi.string().valid('').required(),
  berat_kg : Joi.number().required(),
  harga_rp : Joi.number().required(),
  waktu : Joi.date().required(),
  catatan : Joi.string().required(),

});
const pembelianPanenQuerySchema = Joi.object({
  id_penjual : Joi.string().required(), 
  jenis_komditas_cengkeh : Joi.string().valid('').required(),
  berat_kg : Joi.number().required(),
  harga_rp : Joi.number().required(),
  waktu : Joi.date().required(),
  catatan : Joi.string().required(),

});
const JualBeliPanenQuerySchema = Joi.object({
  id_penjualorpembeli : Joi.string().required(), 
  jenis_komditas_cengkeh : Joi.string().valid('').required(),
  berat_kg : Joi.number().required(),
  harga_rp : Joi.number().required(),
  waktu : Joi.date().required(),
  catatan : Joi.string().required(),

});

module.exports = {
  //users
  AccUserPayloadSchema,
  BuruhUserPayloadSchema,
  UpdateBuruhUserPayloadSchema,
  UpdatePasswordAccUserPayloadSchema,
  UpdatePasswordBuruhUserPayloadSchema,
  UpdateAccUserPayloadSchema,

  //auth
  PostAuthPayloadSchema,
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,

  //lahan
  LahanPayloadSchema,
  LahanQuerySchema,
  //Setoran 
  SetoranPayloadSchema,
  SetoranQuerySchema,
  //Hasil_panen 
  HasilPanenPayloadSchema,
  HasilPanenQuerySchema,

  //Jual_beli 
  PenjualanPayloadSchema,
  PembelianPayloadSchema,
  penjualanPanenQuerySchema,
  pembelianPanenQuerySchema,
  JualBeliPanenQuerySchema

  };