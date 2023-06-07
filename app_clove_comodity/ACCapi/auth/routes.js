const routes = (handler) => [
    {
      method: 'POST',
      path: '/postAuth',
      handler: handler.test,
    },
    {
      method: 'PUT',
      path: `/putAuth`,
      handler: async()=>{},
    },
    {
    method: 'DELETE', 
    path : `/deleteAuth`,
    handler: ()=>{},
    }
  ];
   
  module.exports = routes;