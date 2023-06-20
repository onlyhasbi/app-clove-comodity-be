const routes =(Handler)=> [
//  endpoint api kontak buruh
  {
    method: 'POST',
    path: '/buruh-kontak',
    handler: Handler.addBuruhKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/buruh-kontak',
    handler: Handler.getBuruhKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/buruh-kontak/{kontakId}',
    handler: Handler.editBuruhKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/buruh-kontak/{kontakId}',
    handler: Handler.deleteBuruhKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },


// endpoint api lamaran  
  {
    method: 'POST',
    path: '/lamaran-kerja',
    handler: Handler.addLamaranTerbukaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lamaran-kerja',
    handler: Handler.getLamaranTerbukaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/lamaran-kerja/{lamaranId}',
    handler: Handler.editLamaranTerbukaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/lamaran-kerja/{lamaranId}',
    handler: Handler.deleteLamaranTerbukaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  
];

module.exports=routes;