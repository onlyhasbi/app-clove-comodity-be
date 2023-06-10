const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/dpt',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;