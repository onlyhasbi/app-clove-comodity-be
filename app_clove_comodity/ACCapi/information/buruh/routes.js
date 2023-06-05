const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/ibt',
      handler: handler.test,
    },

  ];
   
  module.exports = routes;