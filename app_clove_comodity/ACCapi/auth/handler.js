const routes = (handler) => [
    {
      method: 'POST',
      path: '/B-Uuser',
      handler: handler.PuserB,
    },
    {
      method: 'POST',
      path: '/auth',
      handler: handler.PuserPxP,
    },
    {
      method: 'POST',
      path: '/auth',
      handler: handler.Pauth,
    },
    {
      method: 'GET',
      path: '/auth',
      handler: handler.Gauth,
    },
    {
      method: 'DELETE',
      path: '/auth',
      handler: handler.Dauth,
    },
    
  ];
   
  module.exports = routes;