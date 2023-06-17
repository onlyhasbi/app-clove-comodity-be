const routes = (handler) => [
    {
      method: 'POST',
      path : `/userPetani`,      
      handler: handler.addUserPetani,
    },

  {
    method: 'GET',
    path : `/userPetani`,      
    handler: handler.getUserPetani,
      options: {
        auth: 'ACC_jwt',
      },
  },

  {
    method: 'PUT',
    path : `/userPetani`,      
    handler: handler.updateUserPetani,
      options: {
        auth: 'ACC_jwt',
      },
  },


  // {
  //   method: 'PUT',
  //   path : `/userPetani/sandi`,      
  //   handler: handler.updateSandiUserPetani,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/userPetani/lupaSandi/{id}`,      
  //   handler: handler.updateLupaSandiUserPetaniWithID,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },


  {
    method: 'DELETE',
    path : `/userPetani`,      
    handler: handler.deleteUserPetani,
      options: {
        auth: 'ACC_jwt',
      },
  },
  
  ];
   
  module.exports = routes;