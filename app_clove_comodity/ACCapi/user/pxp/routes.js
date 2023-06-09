const routes = (handler) => [
    {
      method: 'POST',
      path : `/PxP-User`,      
      handler: handler.postUserPxP,
    },
      // {
  //   method: 'GET',
  //   path : `/B-User`,      
  //   handler: handler.getUserBuruh,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },
  // {
  //   method: 'DELETE',
  //   path : `/B-User`,      
  //   handler: handler.deleteUserBuruh,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },
  ];
   
  module.exports = routes;