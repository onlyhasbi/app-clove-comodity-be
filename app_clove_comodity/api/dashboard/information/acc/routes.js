const routes = (handler) => [
  {
    method: 'GET',
    path: '/lamaran-kerja-by-acc', // PAYLOAD [daerah:(arrayid_lokasi), jenisPekerjaan, upahMinimalPerV, upahMaksimal] 
    handler: handler.lamaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/buruh-by-acc/{buruhId}',
    handler: handler.buruhHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },  
  {
    method: 'GET',
    path: '/relasi-buruh-by-acc',  // query [melamar, undangan, bekerja, ditolak, menolak]: value (boolean) 
    handler: handler.relasiHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/penawaran-other-acc', // PAYLOAD[daerah:(arrayid_lokasi),jenisPenawaran:[penjualan, pembelian] massaMin & massaMaks, harga_min & harga_maks, jenisKomoditas]
    handler: handler.penawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
];
   
  module.exports = routes;