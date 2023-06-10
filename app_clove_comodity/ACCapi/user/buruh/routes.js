const routes =(handler)=> [
  {
    method: 'POST',
    path : `/B-User`,      
    handler: handler.postUserB,
  },
  // {
  //   method: 'GET',
  //   path : `/B-User/{id}`,      
  //   handler: handler.getUserB,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/B-User/{id}`,      
  //   handler: handler.putUserB,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'PUT',
  //   path : `/B-User/lupasandi/{id}`,      
  //   handler: handler.updateLupaSandiUserB,
  //   Option: {
  //     options: {
  //       auth: 'ACC_jwt',
  //     },
  //   }
  // },

  // {
  //   method: 'PUT',
  //   path : `/B-User/sandi/{id}`,      
  //   handler: handler.putSandiUserB,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },

  // {
  //   method: 'DELETE',
  //   path : `/B-User`,      
  //   handler: handler.deleteUserB,
  //   options: {
  //       auth: 'ACC_jwt',
  //     },
  // },
];

module.exports= routes ;