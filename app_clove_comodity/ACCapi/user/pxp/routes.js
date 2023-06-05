const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/upt',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;