const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/auth',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;