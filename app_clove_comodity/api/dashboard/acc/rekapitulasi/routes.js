const routes = (handler) => [
    {
      method: 'GET',
      path: '/komoditas-keluar-masuk',
      handler: handler.test,
    },
    {
      method: 'GET',
      path: '/biaya-komoditas-keluar-masuk',
      handler: handler.test,
    },
    {
      method: 'GET',
      path: '/produktifitas-lahan',
      handler: handler.test,
    },
    {
      method: 'GET',
      path: '/produktifitas-lahan',
      handler: handler.test,
    },
  ];
   
  module.exports = routes;