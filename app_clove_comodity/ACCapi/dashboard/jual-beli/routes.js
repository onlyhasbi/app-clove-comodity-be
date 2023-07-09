const routes = (handler) => [
    {
      method: 'POST',
      path: '/penjualan',
      handler: handler.postPenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/penjualan',
      handler: handler.getPenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/penjualan/{jualBeliId}',
      handler: handler.editPenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/penjualan/{jualBeliId}',
      handler: handler.deletePenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },    



    {
      method: 'POST',
      path: '/pembelian',
      handler: handler.postPembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/pembelian',
      handler: handler.getPembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/pembelian/{jualBeliId}',
      handler: handler.editPembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/pembelian/{jualBeliId}',
      handler: handler.deletePembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    
    {
      method: 'GET',
      path: '/jual-beli',
      handler: handler.getJualBeliHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/jual-beli/{jualBeliId}',
      handler: handler.getJualBeliByIdHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },

    {
      method: 'PUT',
      path: '/editor/{jualBeliId}',
      handler: handler.setEditorHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/verifikasi-penjualan/{jualBeliId}',
      handler: handler.verifikasiPenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'PUT',
      path: '/verifikasi-pembelian/{jualBeliId}',
      handler: handler.verifikasiPembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },

  ];
   
  module.exports = routes;