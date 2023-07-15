const routes = (handler) => [


//user menambahkan data lahan 
  {
    method: 'POST',
    path: '/lahan',
    handler: handler.addLahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lahan',  
    handler: handler.getLahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/lahan/{lahanId}',
    handler: handler.editLahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/lahan/{lahanId}',
    handler: handler.deleteLahanHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },




//user menambahkan data hasil panen
  {
    method: 'POST',
    path: '/hasil-panen',
    handler: handler.addHasilPanenHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/hasil-panen',  
    handler: handler.getHasilPanenHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/hasil-panen/{lahanId}',  
    handler: handler.getHasilPanenByLahanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/hasil-panen/{hasilPanenId}',
    handler: handler.editHasilPanenHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/hasil-panen/{hasilPanenId}',
    handler: handler.deleteHasilPanenHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },





//user menambahkan data setoran 
  {
    method: 'POST',
    path: '/setoran',
    handler: handler.addSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/setoran',  
    handler: handler.getSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/setoran-lahan/{lahanId}',  
    handler: handler.getSetoranByLahanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/setoran-hasil-panen/{hasilPanenId}',  
    handler: handler.getSetoranByHasilPanenHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/setoran/{setoranId}',
    handler: handler.editSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/status-pembayaran-setoran/{setoranId}',  //+query ?status={typedataboolean}
    handler: handler.setStatusPembayaranSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/setoran/{setoranId}',
    handler: handler.deleteSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
];
   
module.exports = routes;