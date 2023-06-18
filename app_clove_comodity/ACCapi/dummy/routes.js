const routes = (handler) => [
    {
      method: 'GET',
      path: '/dummyLocation/{id_location}',
      handler: handler.getLocation,
    },
    {
      method: 'GET',
      path: '/dummySubLocation/{id_kategori}',
      handler: handler.getSubLocation,
    },
  ];
   
  module.exports = routes;