const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/ipt',
      handler: handler.test,
    },


  ];
   
  module.exports = routes;