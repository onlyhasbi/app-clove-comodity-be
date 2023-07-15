const routes = (handler) => [
  //kontak acc
  {
    method: 'POST',
    path: '/acc-kontak',
    handler: handler.addKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/acc-kontak',
    handler: handler.getKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/acc-kontak/{kontakId}',
    handler: handler.editKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/acc-kontak/{kontakId}',
    handler: handler.deleteKontakHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },

//lowongan kerja  
  {
    method: 'POST',
    path: '/lowongan-kerja',
    handler: handler.addLowonganHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/lowongan-kerja',
    handler: handler.getLowonganHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/lowongan-kerja/{lowonganId}',
    handler: handler.editLowonganHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/status-lowongan-kerja/{lowonganId}',
    handler: handler.editStatusLowonganHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/lowongan-kerja/{lowonganId}',
    handler: handler.deleteLowonganHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },

//penawaran komoditas  
  {
    method: 'POST',
    path: '/penawaran-komoditas',
    handler: handler.addPenawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/penawaran-komoditas',
    handler: handler.getPenawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/penawaran-komoditas/{penawaranId}',
    handler: handler.editPenawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/status-penawaran-komoditas/{penawaranId}',
    handler: handler.editStatusPenawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/penawaran-komoditas/{penawaranId}',
    handler: handler.deletePenawaranHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
];

module.exports = routes;