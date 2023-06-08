const routes = (handler) => [
    {
      method: 'POST',
      path: '/Auth',
      handler: handler.postAuth,
    },
    {
      method: 'PUT',
      path: `/Auth`,
      handler: handler.postAuth,
    },
    {
    method: 'DELETE', 
    path : `/Auth`,
    handler: handler.postAuth,
    }
  ];
   
  module.exports = routes;