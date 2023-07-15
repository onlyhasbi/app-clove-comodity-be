const routes = (handler) => [
  {
    method: 'GET',
    path: '/lowongan-kerja-by-buruh', // PAYLOAD [daerah:(arrayid_lokasi), jenisPekerjaan, upahMinimalPerV, upahMaksimal] 
    handler: handler.lowonganHandler,
  },
  {
    method: 'GET',
    path: '/lowongan-by-buruh/{lowonganId}',
    handler: handler.lowonganByIdHandler,
  },
  //pindahkan nanti di relasi
  {
    method: 'GET',
    path: '/relasi-acc-by-buruh',  // query [melamar, undangan, bekerja, ditolak, menolak]: value (boolean) 
    handler: handler.relasiHandler,
  },
];
   
  module.exports = routes;