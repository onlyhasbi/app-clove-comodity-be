const routes =(handler)=> [
  {
    method:'POST',
    path:'/profiling/{ID_user}/kontak',
    handler:handler.addBuruhKontakHandler,
  },
  {
    method:'POST',
    path:'/profiling/{ID_user}/lamaran',
    handler:handler.addLamaranTerbukaHandler,
  },
];

module.exports=routes;