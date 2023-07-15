const routes = (handler) => [


//user menambahkan data lahan 

  {
    method: 'GET',
    path: '/riwayat-kerja-panen',  
    handler: handler.getPanenHandler,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/data-setoran',  
    handler: handler.getSetoranHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/data-setoran-pada-lahan/{lahaniId}',  
    handler: handler.getSetoranByLahanHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/data-kerja-panen-selesai-bayar',  // kelompokkan per lahan
    handler: handler.getPanenSelesaiHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/data-kerja-panen-belum-selesai-bayar',    // kelompokkan per lahan
    handler: handler.getPanenBelumSelesaiHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },

//konplaint data setoran 
  {
    method: 'PUT',
    path: '/conplaint-data-setoran/{setoranId}',
    handler: handler.setConplaintHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/conplaint-data-setoran/{setoranId}',
    handler: handler.deleteConplaintHandler,
    options: {
        auth: 'ACC_jwt',
    },
  },
];
   
module.exports = routes;