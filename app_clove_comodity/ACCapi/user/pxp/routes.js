const routes = (handler) => [
    {
      method: 'POST',
      path : `/userPetani`,      
      handler: handler.addUserPetani,
    },

  // {
  //   method: 'GET',
  //   path : `/userPetani/{ID}`,      
  //   handler: handler.getUserPetaniWithID,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/userPetani/{id}`,      
  //   handler: handler.updateUserPetani,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },


  // {
  //   method: 'PUT',
  //   path : `/userPetani/sandi/{id}`,      
  //   handler: handler.updateSandiUserPetani,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/userPetani/lupaSandi/{id}`,      
  //   handler: handler.updateLupaSandiUserPetani,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },


  // {
  //   method: 'DELETE',
  //   path : `/userPetani`,      
  //   handler: handler.deleteUserBuruhPetani,
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  // },
  
  ];
   
  module.exports = routes;