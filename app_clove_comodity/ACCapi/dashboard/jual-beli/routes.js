const routes = (handler) => [
    {
      method: 'POST',
      path: '/penjualan',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'POST',
      path: '/pembelian',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/Jual-beli',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/pembelian',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/penjualan',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/jual-beli/{id_jualbeli}',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/jual-beli/{id_jualbeli}',
      handler: handler.test,
      options: {
         auth: 'ACC_jwt',
      },
    },
  ];
   
  module.exports = routes;