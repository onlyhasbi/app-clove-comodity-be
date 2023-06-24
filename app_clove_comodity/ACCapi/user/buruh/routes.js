const routes =(handler)=> [
  {
    method: 'POST',
    path : `/userBuruh`,      
    handler: handler.postUserBuruh,
  },
  {
    method: 'GET',
    path : `/userBuruh`,      
    handler: handler.getUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/userBuruh`,      
    handler: handler.updateUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/gantiSandiBuruh`,      
    handler: handler.updateSandiUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  // {
  //   method: 'PUT',
  //   path : `/userBuruh/lupasandi/{id}`,      
  //   handler: handler.updateLupaSandiUserBuruh,
  //   options: {
  //     auth: 'ACC_jwt',
  //   },

  // },
  {
    method: 'DELETE',
    path : `/userBuruh`,      
    handler: handler.deleteUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  
];

module.exports= routes ;