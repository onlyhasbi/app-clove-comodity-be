const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/hasil_pengeringan',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;