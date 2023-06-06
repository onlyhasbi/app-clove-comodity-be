const routes = (handler) => [
  {
    method: 'POST',
    path : `/B-User`,      
    handler: handler.postUserBuruh,
  },
  ];
   
  module.exports = routes;