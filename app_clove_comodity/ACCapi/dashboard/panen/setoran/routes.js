const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/setoran',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;