const routes = (handler) => [
    {
      method: 'POST',
      path : `/PxP-User`,      
      handler: handler.postUserPxP,
    },

  // {
  //   method: 'GET',
  //   path : `/B-User/{id}`,      
  //   handler: handler.getUserPXPdenganid,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path : `/B-User/{id}`,      
  //   handler: handler.putUserPXP,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },


  // {
  //   method: 'PUT',
  //   path : `/B-User/sandi/{id}`,      
  //   handler: handler.putSandiUserPXP,
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