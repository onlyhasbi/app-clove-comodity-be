const routes = (handler) => [
    /* 
    //contoh, hapus saja
    */
    {
      method: 'GET',
      path: '/dbt',
      handler: handler.test,
    },


  ];
   
  module.exports = routes;