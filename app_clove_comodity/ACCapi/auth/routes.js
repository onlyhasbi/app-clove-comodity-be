const routes = (handler) => [
    {
      method: 'POST',
      path: '/authB',
      handler: handler.postAuthB,
    },
    {
      method: 'POST',
      path: '/authPxP',
      handler: handler.postAuthPxP,
    },
    {
      method: 'PUT',
      path: `/auth`,
      handler: handler.putAuth,
    },
    {
    method: 'DELETE', 
    path : `/auth`,
    handler: handler.deleteAuth,
    }
  ];
   
  module.exports = routes;