const routes = (handler) => [
    {
      method: 'POST',
      path: '/penjualan',
      handler: handler.postPenjualan,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/penjualan',
      handler: handler.getPenjualan,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/penjualan/{penjualanId}',
      handler: handler.putPenjualan,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/penjualan/{penjualanId}',
      handler: handler.deletePenjualan,
      options: {
         auth: 'ACC_jwt',
      },
    },    



    {
      method: 'POST',
      path: '/pembelian',
      handler: handler.postPembelian,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/pembelian',
      handler: handler.getPembelian,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/pembelian/{pembelianId}',
      handler: handler.putPembelian,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/pembelian/{pembelianId}',
      handler: handler.deletePembelian,
      options: {
         auth: 'ACC_jwt',
      },
    },


    {
      method: 'PUT',
      path: '/set-editor/{jualBeliId}',
      handler: handler.setJualBelibyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/set-editor/{jualBeliId}',
      handler: handler.getJualBelibyId,
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
      path: '/Jual-beli/{jualBeliId}',
      handler: handler.getJualBelibyId,
      options: {
         auth: 'ACC_jwt',
      },
    },
  ];
   
  module.exports = routes;