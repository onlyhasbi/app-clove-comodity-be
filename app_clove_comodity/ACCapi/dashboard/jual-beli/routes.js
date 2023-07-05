const routes = (handler) => [
    {
      method: 'POST',
      path: '/penjualan',
      handler: handler.addPenjualanHandler,
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
      path: '/penjualan/{penjualanId}',
      handler: handler.editPenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/penjualan/{penjualanId}',
      handler: handler.deletePenjualanHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },    



    {
      method: 'POST',
      path: '/pembelian',
      handler: handler.addPembelianHandler,
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
      path: '/pembelian/{pembelianId}',
      handler: handler.editPembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'DELETE',
      path: '/pembelian/{pembelianId}',
      handler: handler.deletePembelianHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    
    {
      method: 'GET',
      path: '/Jual-beli',
      handler: handler.getJualBeliHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },
    {
      method: 'GET',
      path: '/Jual-beli/{jualBeliId}',
      handler: handler.getJualBeliByIdHandler,
      options: {
         auth: 'ACC_jwt',
      },
    },

    {
      method: 'PUT',
      path: '/set-editor/{jualBeliId}',
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