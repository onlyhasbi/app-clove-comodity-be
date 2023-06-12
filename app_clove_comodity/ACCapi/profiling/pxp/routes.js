const routes = (handler) => [
  {
    method: 'POST',
    path: '/pxp/{ID_user}',
    handler: handler.addKontakPxpHandler,
  },
  {
    method: 'POST',
    path: '/pxp/{ID_user}',
    handler: handler.addLowonganKerjaHandler,
  },
  {
    method: 'POST',
    path: '/pxp/{ID_user}',
    handler: handler.addPenawaranKomoditiHandler,
  },
  {
    method: 'GET',
    path: '/pxp/{ID_user}',
    handler: handler.getKontakPxpHandler,
  },
  {
    method: 'GET',
    path: '/pxp/{ID_user}',
    handler: handler.getLowonganKerjaHandler,
  },
  {
    method: 'GET',
    path: '/pxp/{ID_user}',
    handler: handler.getPenawaranKomoditiHandler,
  },
  {
    method: 'PUT',
    path: '/pxp/{ID}',
    handler: handler.editKontakPxpHandler,
  },
  {
    method: 'PUT',
    path: '/pxp/{ID}',
    handler: handler.editLowonganKerjaHandler,
  },
  {
    method: 'PUT',
    path: '/pxp/{ID}',
    handler: handler.editPenawaranKomoditiHandler,
  },
  {
    method: 'DELETE',
    path: '/pxp/{ID}',
    handler: handler.deleteKontakPxpHandler,
  },
  {
    method: 'DELETE',
    path: '/pxp/{ID}',
    handler: handler.deleteLowonganKerjaHandler,
  },
  {
    method: 'DELETE',
    path: '/pxp/{ID}',
    handler: handler.deletePenawaranKomoditiHandler,
  },
];

module.exports = routes;