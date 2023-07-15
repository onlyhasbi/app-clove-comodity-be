
  const routes = (handler) => [
    {
      method: 'POST',
      path: '/foto-profil/{userId}',
      handler: handler.postFotoProfilHandler,
      options: {
        auth: 'ACC_jwt',
        payload: {
          allow: 'multipart/form-data',
          multipart: true,
          maxBytes:512000, 
          output: 'stream',
        },
      },
    },
    {
      method: 'GET',
      path: '/foto-profil/{param*}',
      handler: {
        directory: {
          path: path.resolve( './storage' ),
        },
      },
      options: {
        auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/foto-profil/{userId}', 
      handler: handler.deleteFotoProfilHandler,
      options: {
        auth: 'ACC_jwt',
      },
    },
  ];
   
  module.exports = routes;