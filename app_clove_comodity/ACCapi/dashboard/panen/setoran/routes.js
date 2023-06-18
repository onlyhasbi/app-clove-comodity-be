const routes = (handler) => [
  //user menambahkan data setoran 
  {
    method: 'POST',
    path: '/setoran',
    handler: handler.postSetoranbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data setoran berdasarkan User
  {
    method: 'GET',
    path: '/SetoranByUser',  
    handler: handler.getSetoranbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data setoran berdasarkan Id
  {
    method: 'GET',
    path: '/Setoran/{ID}',
    handler: handler.getSetoranbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user merubah data setoran berdasarkan id
  {
    method: 'PUT',
    path: '/setoran/{ID}',
    handler: handler.putLahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user menghapus data setoran berdasarkan id
  {
    method: 'DELETE',
    path: '/setoran/{ID}',
    handler: handler.deleteSetoranbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },


    //user menambahkan data buruh pada setoran 
    {
      method: 'POST',
      path: '/BuruhSetor/{id_setoran}/{id_buruh}',
      handler: handler.buruhSetorbyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    //user mengambil data buruh pada semua setoran akses user
    {
      method: 'GET',
      path: '/BuruhSetor',  
      handler: handler.getBuruhSetorbyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    //mengambil data buruh pada setoran setiap setoran Id
    {
      method: 'GET',
      path: '/BuruhSetor/{id_setoran}',
      handler: handler.getBuruhSetorbySetoranId,
      options: {
         auth: 'ACC_jwt',
      },
    },
    //user menghapus data buruh berdasarkan pada setoran
    {
      method: 'DELETE',
      path: '/BuruhSetor/{id_setoran}/{id_buruh}',
      handler: handler.deleteBuruhSetorbyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
  ];
   
  module.exports = routes;