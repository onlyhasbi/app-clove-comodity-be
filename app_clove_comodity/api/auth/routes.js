const routes = (handler) => [
    {
      method: 'POST',
      path: '/authenticationBuruh',
      handler: handler.postAuthenticationBuruh,
    },
    {
      method: 'POST',
      path: '/authenticationAcc',
      handler: handler.postAuthenticationAcc,
    },
    {
      method: 'PUT',
      path: `/authentication`,
      handler: handler.putAuthentication,
    },
    {
    method: 'DELETE', 
    path : `/authentication`,
    handler: handler.deleteAuthentication,
    }
  ];
   
  module.exports = routes;