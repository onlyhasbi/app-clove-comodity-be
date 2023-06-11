const routes = (handler) => [
  {
    method: 'POST',
    path: '/lahan',
    handler: handler.test,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lahan',  //semua lahan yang dikelolah
    handler: handler.test,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lahan/{ID}', //lahan BERDASARKAN ID
    handler: handler.test,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/lahan/{ID}',
    handler: handler.test,
    options: {
       auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/lahan/{ID}',
    handler: handler.test,
    options: {
       auth: 'ACC_jwt',
    },
  },
  ];
   
  module.exports = routes;