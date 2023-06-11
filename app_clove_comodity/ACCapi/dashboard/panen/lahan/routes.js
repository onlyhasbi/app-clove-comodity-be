const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/lahan',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;