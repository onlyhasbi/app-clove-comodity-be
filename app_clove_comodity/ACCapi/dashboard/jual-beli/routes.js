const routes = (handler) => [
    {
      method: 'POST',
      path: '/penjualan',
      handler: handler.postPenjualanByUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'POST',
      path: '/pembelian',
      handler: handler.postPembelianbyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/Jual-beli',
      handler: handler.getJualBelibyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/Jual-beli/{ID}',
      handler: handler.getJualBelibyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/pembelian',
      handler: handler.getPembelianbyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/penjualan',
      handler: handler.getPenjualanbyUser,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/jual-beli/{ID}',
      handler: handler.putJualBelibyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/jual-beli/{id_jualbeli}',
      handler: handler.deleteJualBelibyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
  ];
   
  module.exports = routes;