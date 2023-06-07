const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/pbt',
      handler: handler.test,
    },
  ];
   
  module.exports = routes;