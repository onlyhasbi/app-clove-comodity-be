const routes = (handler) => [
    {
      method: 'POST',
      path : `/PxP-User`,      
      handler: handler.postUserPxP,
    },
  ];
   
  module.exports = routes;