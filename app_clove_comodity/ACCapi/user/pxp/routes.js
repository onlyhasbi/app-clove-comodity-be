const routes = (handler) => [
    {
      method: 'POST',
      path : `/PxP-User`,      
      handler: handler.addUserPxP,
    },

  // {
  //   method: 'GET',
  //   path : `/PXP-User/{id}`,      
  //   handler: handler.getUserPXPdenganid,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path : `/PXP-User/{id}`,      
  //   handler: handler.updateUserPXP,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },


  // {
  //   method: 'PUT',
  //   path : `/PXP-User/sandi/{id}`,      
  //   handler: handler.updateSandiUserPXP,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path : `/PXP-User/lupasandi/{id}`,      
  //   handler: handler.updateLupaSandiUserPXP,
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