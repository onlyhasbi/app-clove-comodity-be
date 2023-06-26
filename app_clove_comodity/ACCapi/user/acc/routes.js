const routes = (handler) => [
    {
      method: 'POST',
      path : `/user-acc`,      
      handler: handler.addUserAcc,
    },

  {
    method: 'GET',
    path : `/user-acc`,      
    handler: handler.getUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },

  {
    method: 'PUT',
    path : `/user-acc`,      
    handler: handler.updateUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/ganti-sandi-user-acc`,      
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
    path : `/user-acc`,      
    handler: handler.deleteUserAcc,
      options: {
        auth: 'ACC_jwt',
      },
  },
  
  ];
   
  module.exports = routes;