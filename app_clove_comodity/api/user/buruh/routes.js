const routes =(handler)=> [  
  {
    method: 'POST',
    path : `/user-buruh`,      
    handler: handler.postUserBuruh,
  },
  {
    method: 'GET',
    path : `/user-buruh`,      
    handler: handler.getUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/user-buruh`,      
    handler: handler.updateUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  {
    method: 'PUT',
    path : `/ganti-sandi-user-buruh`,      
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
    path : `/user-buruh`,      
    handler: handler.deleteUserBuruh,
    options: {
        auth: 'ACC_jwt',
      },
  },
  
];

module.exports= routes ;