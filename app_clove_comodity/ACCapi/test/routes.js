const routes = (handler) => [
    {
      method: 'GET',
      path: '/test',
      handler: handler.test,
    },
  ];
   
  module.exports = routes;