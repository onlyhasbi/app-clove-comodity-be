const routes = (handler) => [
    {
      method: 'POST',
      path : `/userAcc`,      
      handler: handler.addUserAcc,
    },

  {
    method: 'GET',
    path : `/userAcc`,      
    handler: handler.getUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },

  {
    method: 'PUT',
    path : `/userAcc`,      
    handler: handler.updateUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/gantiSandiAcc`,      
    handler: handler.updateSandiUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },

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
    path : `/userAcc`,      
    handler: handler.deleteUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },
  
  ];
   
  module.exports = routes;