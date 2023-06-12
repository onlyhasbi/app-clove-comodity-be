const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/bahan_pengeringan',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;