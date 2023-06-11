const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/rekapitulasi',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;