const routes =(Handler)=> [
//  endpoint api kontak buruh
  {
    method: 'POST',
<<<<<<< HEAD
    path: '/KontakBuruh',
    handler: Handler.postKontakBuruh,
=======
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
>>>>>>> 4bb930930a4e77284404f18d7984856db3ef2f67
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


<<<<<<< HEAD
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
=======
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
    method: 'PUT',
    path: '/status-lamaran-kerja/{lamaranId}',
    handler: Handler.editStatusLamaranHandler,
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
>>>>>>> 4bb930930a4e77284404f18d7984856db3ef2f67
  
];

module.exports=routes;