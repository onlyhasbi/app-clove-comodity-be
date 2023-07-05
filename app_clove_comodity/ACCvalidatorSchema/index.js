const Joi = require('joi');

//validator users
const BuruhUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}-\d{7}$/),
});
const AccUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  sandi: Joi.string().required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}-\d{7}$/),
});
const UpdateBuruhUserPayloadSchema = Joi.object({
  nama: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  jenis_kelamin: Joi.string().valid('laki-laki','perempuan').required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}-\d{7}$/),
});
const UpdateAccUserPayloadSchema = Joi.object({
  jenis_pengguna: Joi.string().valid('perorangan','UMKM/KLP.Tani','CV', 'PT').required(),
  nama: Joi.string().required(),
  alamat: Joi.string().pattern(/^[a-zA-Z]{2}-\d{7}$/),
});
const UpdatePasswordUserPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{10,12}$/).required(),
  sandi: Joi.string().required(),
  sandi_baru: Joi.string().required(),
});

const CredentialParameterPayloadSchema = Joi.object({
  nomor_telpon: Joi.string().pattern(/^[0-9]{11,13}$/).required(),
  sandi: Joi.string().required(),
});






//validator auth
const PutAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});
const DeleteAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});




//validator profiling
const kontakPayloadSchema = Joi.object({
  jenis_kontak: Joi.string().valid('telpon', 'whatsapp', 'facebook', 'instagram', 'linkid', 'indeed', 'lainnya').required(),
  kontak: Joi.string().required(),
});
const lamaranPayloadSchema = Joi.object({
  jenis_pekerjaan: Joi.string().valid('buruh_panen','buruh_penjemuran').required(),
  upah_harapan: Joi.number().required(),
  indikator_ukur: Joi.string().valid('berat/kg', 'volume/liter').required(),
  catatan: Joi.string(),

});
const jobReqruimentPayloadSchema = Joi.object({
  jenis_pekerjaan: Joi.string().valid('buruh_panen','buruh_penjemuran').required(),
  upah_rp: Joi.number().required(),
  indikator_ukur: Joi.string().valid('berat/kg', 'volume/liter').required(),
  catatan: Joi.string(),  
});
const offerPayloadSchema = Joi.object({
  jenis_penawaran: Joi.string().valid('menjual', 'membeli').required(),
  jenis_komoditas: Joi.string().valid('kering', 'basah').required(),
  max: Joi.number(),
  min: Joi.number(),
  satuan: Joi.string().valid('berat/kg', 'volume/liter').required(),
  harga_rp: Joi.number().required(),
  catatan: Joi.string(),  
});






//validator panen
const LahanPayloadSchema = Joi.object({
  nama: Joi.string().required(),
  lokasi: Joi.string().pattern(/^[a-zA-Z]{2}-\d{7}$/).required(),
  luas_m2: Joi.number(),
  status_hak_panen: Joi.string().valid('milik_sendiri','milik_tergadai','milik_dengan_pajak', 'bagi_hasil').required(),
});
const HasilPanenPayloadSchema = Joi.object({
  id_lahan : Joi.string().required(),
  berat_pengukuran_kg: Joi.number(),
  volume_pengukuran_kg: Joi.number(),
  waktu: Joi.string().required(),
  catatan: Joi.string().required(),
}); 
const SetoranPayloadSchema = Joi.object({
  id_hasil_panen: Joi.string().required(),
  id_buruh: Joi.string().required(),
  volume_liter: Joi.number().required(),
  berat_kg: Joi.number().required(),
  upah_rp: Joi.number().required(),
  waktu: Joi.date().required(),
  catatan: Joi.string(),
});
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


//validator pengeringan 
const TimPengeringanPayloadSchema = Joi.object({
  nama_tim: Joi.string().required(),
  ketua_tim: Joi.string().required(), 
});
const BahanPengeringanPayloadSchema = Joi.object({
  berat_kg: Joi.number().required(),
  volume_liter: Joi.number().required(),
  waktu_mulai_pengeringan: Joi.date().required(),
  catatan: Joi.string().required(),
});
const HasilPengeringanPayloadSchema = Joi.object({
  tim_pengeringan: Joi.string().required(),
  berat_kg: Joi.number().required(),
  volume_liter: Joi.number().required(),
  dikeringkan: Joi.string().valid('','').required(),
  catatan: Joi.string().required(),
});

//validator request params
const statusQuerySchema = Joi.object({
  status_aktif: Joi.boolean().required(), 
});

module.exports = {

  //profiling
  kontakPayloadSchema,
  lamaranPayloadSchema,
  jobReqruimentPayloadSchema,
  offerPayloadSchema,

  //users
  AccUserPayloadSchema,
  BuruhUserPayloadSchema,
  UpdateBuruhUserPayloadSchema,
  UpdateAccUserPayloadSchema,
  UpdatePasswordUserPayloadSchema,

  CredentialParameterPayloadSchema,

  //auth
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,

  //panen
  LahanPayloadSchema, 
  SetoranPayloadSchema,
  HasilPanenPayloadSchema,

  //Jual_beli 
  PenjualanPayloadSchema,
  PembelianPayloadSchema,
  penjualanPanenQuerySchema,
  pembelianPanenQuerySchema,
  JualBeliPanenQuerySchema,

  //pengeringan 
  TimPengeringanPayloadSchema,
  BahanPengeringanPayloadSchema,
  HasilPengeringanPayloadSchema,

//validator request params
  statusQuerySchema
  };