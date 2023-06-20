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
    path: '/acc-lowongan-kerja',
    handler: handler.addLowonganKerjaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/acc-lowongan-kerja',
    handler: handler.getLowonganKerjaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/acc-lowongan-kerja/{lowonganId}',
    handler: handler.editLowonganKerjaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/acc-lowongan-kerja/{lowonganId}',
    handler: handler.deleteLowonganKerjaHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },

//penawaran komoditi  
  {
    method: 'POST',
    path: '/acc-penawaran-komoditi',
    handler: handler.addPenawaranKomoditiHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'GET',
    path: '/acc-penawaran-komoditi',
    handler: handler.getPenawaranKomoditiHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/acc-penawaran-komoditi',
    handler: handler.editPenawaranKomoditiHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/acc-penawaran-komoditi',
    handler: handler.deletePenawaranKomoditiHandler,
    options: {
      auth: 'ACC_jwt',
    },
  },
];

module.exports = routes;