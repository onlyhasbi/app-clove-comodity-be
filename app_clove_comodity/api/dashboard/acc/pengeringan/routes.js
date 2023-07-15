const routes = (handler) => [
//user menambahkan data tim pengeringan
  {
    method: 'POST',
    path: '/tim-pengeringan',
    handler: handler.addTimPengeringanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/tim-pengeringan',
    handler: handler.getTimPengeringanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/tim-pengeringan/{timId}',
    handler: handler.putTimPengeringanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/tim-pengeringan/{timId}',
    handler: handler.deleteTimPengeringanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },





//user menambahkan data anggota tim pengeringan
  {
    method: 'POST',
    path: '/anggota-tim/{anggotaTimId}/pada-tim-pengeringan/{timId}', 
    handler: handler.addAnggotaTimHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/anggota-tim/{timId}',
    handler: handler.getAnggotaTimHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/anggota-tim/{anggotaTimId}/pada-tim-pengeringan/{timId}',  
    handler: handler.deleteAnggotaTimHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },






//user menambahkan data bahan pengeringan
  {
    method: 'POST',
    path: '/bahan-pengeringan',
    handler: handler.addBahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/bahan-pengeringan',
    handler: handler.getBahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/bahan-pengeringan/{bahanPengeringanId}',
    handler: handler.putBahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/bahan-pengeringan/{bahanPengeringanId}',
    handler: handler.deleteBahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },





  //routes hasil pengeringan 
  {
    method: 'POST',
    path: '/hasil-pengeringan',
    handler: handler.addBahanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/hasil-pengeringan',
    handler: handler.getHasilHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/hasil-pengeringan/{hasilPengeringanId}',
    handler: handler.putHasilHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/status-pembayaran-hasil-pengeringan/{hasilPengeringanId}',  
    handler: handler.setStatusPembayaranPengeringanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/hasil-pengeringan/{hasilPengeringanId}',
    handler: handler.deleteHasilHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },

  //routes link bahan pengeringan pada hasil pengeringan
  {
    method: 'POST',
    path: '/bahan-pengeringan/{bahanPengeringanId}/pada-hasil-pengeringan/{hasilPanenId}',  
    handler: handler.postLinkBahanPadaHasilPengeringanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/bahan-pengeringan/{bahanPengeringanId}/pada-hasil-pengeringan/{hasilPanenId}',  
    handler: handler.DeleteLinkBahanPadaHasilPengeringanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  ];
   
  module.exports = routes;