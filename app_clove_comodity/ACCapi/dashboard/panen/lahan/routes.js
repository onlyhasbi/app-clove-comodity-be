const routes = (handler) => [
  //user menambahkan data lahan 
  {
    method: 'POST',
    path: '/lahan',
    handler: handler.postLahanbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan User
  {
    method: 'GET',
    path: '/lahanUser',  
    handler: handler.getLahanbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan Id
  {
    method: 'GET',
    path: '/lahan/{ID}',
    handler: handler.getLahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil semua data lahan dengan klausa berdasarkan query
  {
    method: 'GET',
    path: '/lahan',
    handler: handler.getLahan,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user merubah data lahan berdasarkan id
  {
    method: 'PUT',
    path: '/lahan/{ID}',
    handler: handler.putLahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user menghapus data lahan berdasarkan id
  {
    method: 'DELETE',
    path: '/lahan/{ID}',
    handler: handler.deleteLahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  ];
   
  module.exports = routes;