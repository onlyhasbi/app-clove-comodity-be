const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/hasil_panen',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;