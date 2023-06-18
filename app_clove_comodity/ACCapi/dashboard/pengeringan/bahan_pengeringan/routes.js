const routes = (handler) => [
  //user menambahkan data lahan 
  {
    method: 'POST',
    path: '/bahanPengeringan',
    handler: handler.postBahanbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan User
  {
    method: 'GET',
    path: '/bahanPengeringanUser',  
    handler: handler.getBahanbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan Id
  {
    method: 'GET',
    path: '/bahanPengeringan/{ID}',
    handler: handler.getBahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil semua data lahan dengan klausa berdasarkan query
  {
    method: 'GET',
    path: '/bahanPengeringan',
    handler: handler.getBahan,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user merubah data bahan berdasarkan id
  {
    method: 'PUT',
    path: '/bahanPengeringan/{ID}',
    handler: handler.putBahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user menghapus data lahan berdasarkan id
  {
    method: 'DELETE',
    path: '/bahanPengeringan/{ID}',
    handler: handler.deleteBahanbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  ];
   
  module.exports = routes;