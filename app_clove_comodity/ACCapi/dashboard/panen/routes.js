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
    //user menambahkan data lahan 
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
      method: 'PUT',
      path: '/setoran/{setoranId}',
      handler: handler.editSetoranHandler,
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