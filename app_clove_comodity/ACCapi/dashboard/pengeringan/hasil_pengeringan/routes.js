const routes = (handler) => [
  //user menambahkan data lahan 
  {
    method: 'POST',
    path: '/hasilPengeringan',
    handler: handler.postHasilbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan User
  {
    method: 'GET',
    path: '/hasilPengeringanUser',  
    handler: handler.getHasilbyUser,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil data lahan berdasarkan Id
  {
    method: 'GET',
    path: '/hasilPengeringan/{ID}',
    handler: handler.getHasilbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //mengambil semua data lahan dengan klausa berdasarkan query
  {
    method: 'GET',
    path: '/hasilPengeringan',
    handler: handler.getHasil,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user merubah data bahan berdasarkan id
  {
    method: 'PUT',
    path: '/hasilPengeringan/{ID}',
    handler: handler.putHasilbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  //user menghapus data lahan berdasarkan id
  {
    method: 'DELETE',
    path: '/hasilPengeringan/{ID}',
    handler: handler.deleteHasilbyId,
    options: {
       auth: 'ACC_jwt',
    },
  },
  ];
   
  module.exports = routes;