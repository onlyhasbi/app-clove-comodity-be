const routes =(Handler)=> [
//  endpoint api kontak buruh
  {
    method: 'POST',
    path: '/buruh-kontak',
    handler: Handler.addKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/buruh-kontak',
    handler: Handler.getKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/buruh-kontak/{kontakId}',
    handler: Handler.editKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/buruh-kontak/{kontakId}',
    handler: Handler.deleteKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },


// endpoint api lamaran  
  {
    method: 'POST',
    path: '/lamaran-kerja',
    handler: Handler.addLamaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lamaran-kerja',
    handler: Handler.getLamaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/lamaran-kerja/{lamaranId}',
    handler: Handler.editLamaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/lamaran-kerja/{lamaranId}',
    handler: Handler.deleteLamaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  
];

module.exports=routes;