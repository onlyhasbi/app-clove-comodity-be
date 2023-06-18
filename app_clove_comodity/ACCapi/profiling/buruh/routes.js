const routes =(Handler)=> [
  {
    method: 'POST',
    path: '/buruh-kontak/{ID_user}',
    handler: Handler.addBuruhKontakHandler,
  },
  {
    method: 'POST',
    path: '/lamaran-terbuka/{ID_user}',
    handler: Handler.addLamaranTerbukaHandler,
  },
  {
    method: 'GET',
    path: '/buruh-kontak/{ID_user}',
    handler: Handler.getBuruhKontakHandler,
  },
  {
    method: 'GET',
    path: '/lamaran-terbuka/{ID_user}',
    handler: Handler.getLamaranTerbukaHandler,
  },
  {
    method: 'PUT',
    path: '/buruh-kontak/{ID}',
    handler: Handler.editBuruhKontakHandler,
  },
  {
    method: 'PUT',
    path: '/lamaran-terbuka/{ID}',
    handler: Handler.editLamaranTerbukaHandler,
  },
  {
    method: 'DELETE',
    path: '/buruh-kontak/{ID}',
    handler: Handler.deleteBuruhKontakHandler,
  },
  {
    method: 'DELETE',
    path: '/lamaran-terbuka/{ID}',
    handler: Handler.deleteLamaranTerbukaHandler,
  },
];

module.exports=routes;