const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/ubt',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;