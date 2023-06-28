const routes =(Handler)=> [
//  endpoint api kontak buruh
  {
    method: 'POST',
    path: '/KontakBuruh',
    handler: Handler.postKontakBuruh,
    options: {
      auth: 'ACC_jwt',
    },
  },
//   {
//     method: 'GET',
//     path: '/buruh-kontak',
//     handler: Handler.getBuruhKontakHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
//   {
//     method: 'PUT',
//     path: '/buruh-kontak',
//     handler: Handler.editBuruhKontakHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
//   {
//     method: 'DELETE',
//     path: '/buruh-kontak',
//     handler: Handler.deleteBuruhKontakHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },


// // endpoint api lamaran  
//   {
//     method: 'POST',
//     path: '/lamaran-terbuka',
//     handler: Handler.addLamaranTerbukaHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
//   {
//     method: 'GET',
//     path: '/lamaran-terbuka',
//     handler: Handler.getLamaranTerbukaHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
//   {
//     method: 'PUT',
//     path: '/lamaran-terbuka',
//     handler: Handler.editLamaranTerbukaHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
//   {
//     method: 'DELETE',
//     path: '/lamaran-terbuka',
//     handler: Handler.deleteLamaranTerbukaHandler,
//     options: {
//       auth: 'ACC_jwt',
//     },
//   },
  
];

module.exports=routes;