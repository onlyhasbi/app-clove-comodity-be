const routes = (handler) => [
  {
    method: 'POST',
    path: '/kontak/{ID_user}',
    handler: handler.addKontakPxpHandler,
  },
  {
    method: 'POST',
    path: '/lowongan-kerja/{ID_user}',
    handler: handler.addLowonganKerjaHandler,
  },
  {
    method: 'POST',
    path: '/penawaran-komoditi/{ID_user}',
    handler: handler.addPenawaranKomoditiHandler,
  },
  {
    method: 'GET',
    path: '/kontak/{ID_user}',
    handler: handler.getKontakPxpHandler,
  },
  {
    method: 'GET',
    path: '/lowongan-kerja/{ID_user}',
    handler: handler.getLowonganKerjaHandler,
  },
  {
    method: 'GET',
    path: '/penawaran-komoditi/{ID_user}',
    handler: handler.getPenawaranKomoditiHandler,
  },
  {
    method: 'PUT',
    path: '/kontak/{ID}',
    handler: handler.editKontakPxpHandler,
  },
  {
    method: 'PUT',
    path: '/lowongan-kerja/{ID}',
    handler: handler.editLowonganKerjaHandler,
  },
  {
    method: 'PUT',
    path: '/penawaran-komoditi/{ID}',
    handler: handler.editPenawaranKomoditiHandler,
  },
  {
    method: 'DELETE',
    path: '/kontak/{ID}',
    handler: handler.deleteKontakPxpHandler,
  },
  {
    method: 'DELETE',
    path: '/lowongan-kerja/{ID}',
    handler: handler.deleteLowonganKerjaHandler,
  },
  {
    method: 'DELETE',
    path: '/penawaran-komoditi/{ID}',
    handler: handler.deletePenawaranKomoditiHandler,
  },
];

module.exports = routes;