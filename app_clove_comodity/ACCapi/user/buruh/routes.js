const routes =(handler)=> [
  {
    method: 'POST',
    path : `/userBuruh`,      
    handler: handler.postUserBuruh,
  },
  // {
  //   method: 'GET',
  //   path : `/userBuruh/{id}`,      
  //   handler: handler.getUserBuruh,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/userBuruh/{id}`,      
  //   handler: handler.putUserBuruh,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/userBuruh/lupasandi/{id}`,      
  //   handler: handler.updateLupaSandiUserBuruh,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path : `/userBuruh/sandi/{id}`,      
  //   handler: handler.putSandiUserBuruh,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'DELETE',
  //   path : `/userBuruh`,      
  //   handler: handler.deleteUserBuruh,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },
];

module.exports= routes ;