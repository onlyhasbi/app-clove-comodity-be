const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/ppt',
      handler: handler.test,
    },


  ];
   
  module.exports = routes;