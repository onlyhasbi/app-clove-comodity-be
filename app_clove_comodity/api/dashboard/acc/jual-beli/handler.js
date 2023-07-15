const responseCatch = require('../../../../exception/responseHandlerCatch');
const autoBind = require ('auto-bind');


class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator =validator;
    this._author = author;
    this._response = (h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }

    autoBind(this);
}

//handler penjualan
  async postPenjualanHandler (request, h) {
    try {
      await this._validator.penjualan(request.payload);
      await this._service.checkTransactionPartnersIsUser(request.auth.credentials.id, request.payload.id_pembeli);
      const jualBeliId = await this._service.addJualBeli('penjual', request.auth.credentials.id, request.payload.id_pembeli, request.payload);
      const response = await this._response( h, 201 ,  {jualBeliId,}, `data penjualan berhasil ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }    
  }
  async getPenjualanHandler(request, h) {
    try {
      const penjualan = await this._service.getPenjualan(request.auth.credentials.id);
      const response = await this._response(h, 200, penjualan );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editPenjualanHandler(request, h) {
    try {
      await this._validator.penjualan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId)
      await this._service.checkTransactionPartnersIsUser(request.auth.credentials.id, request.payload.id_pembeli);
      const jualBeliId = await this._service.updateJualBeli(request.params.jualBeliId, request.payload.id_pembeli, request.payload);
      const response = await this._response(h, 201, { jualBeliId } , 'Data penjualan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deletePenjualanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId)
      await this._service.deleteJualBeli(request.params.jualBeliId);
      const response = await this._response(h, 201, undefined , 'Data penjualan berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  
//handler pembelian  
  async postPembelianHandler (request, h) {
    try {
      await this._validator.pembelian(request.payload);
      await this._service.checkTransactionPartnersIsUser(request.auth.credentials.id, request.payload.id_penjual);
      const jualBeliId = await this._service.addJualBeli('pembeli', request.auth.credentials.id, request.payload.id_penjual, request.payload);
      const response = await this._response( h, 201,  { jualBeliId, }, `data peembelian berhasil ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getPembelianHandler(request, h) {
    try {
      const pembelian = await this._service.getPembelian(request.auth.credentials.id);
      const response = await this._response(h, 200, pembelian );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editPembelianHandler(request, h) {
    try {
      await this._validator.pembelian(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId);
      await this._service.checkTransactionPartnersIsUser(request.auth.credentials.id, request.payload.id_penjual);
      const jualBeliId = await this._service.updateJualBeli( request.params.jualBeliId, request.payload.id_penjual, request.payload);
      const response = await this._response(h, 201, { jualBeliId } , 'Data pembelian berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deletePembelianHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId)
      await this._service.deleteJualBeli(request.params.jualBeliId);
      const response = await this._response(h, 201, undefined , 'Data pembelian berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }


//handler jual-beli  
  async getJualBeliHandler(request, h) {
    try {
      console.log('cscs')
      const data = await this._service.getJualBeli(request.auth.credentials.id);
      const response = await this._response(h, 200, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getJualBeliByIdHandler(request, h) {
    try {
      const data = await this._service.getJualBeliById(request.params.jualBeliId);
      const response = await this._response(h, 200, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }


//handler data kelengkapan jual-beli  
  async setEditorHandler(request, h) {
    try {
   
      await this._author.verifyUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId);
      const editorJualBeliId = await this._service.setEditor(request.params.jualBeliId, request.query.value);
      const response = await this._response(h, 201, { editorJualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async verifikasiPenjualanHandler (request, h) {
    try {
      await this._service.verifyTransactionPartnersIsUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId)
      const verifikasiPenjualId = await this._service.setVerifikasi('penjual',request.params.jualBeliId, request.query.status);
      const response = await this._response(h, 201, {verifikasiPenjualId} , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async verifikasiPembelianHandler (request, h) {
    try {
      await this._service.verifyTransactionPartnersIsUser(request.auth.credentials.id, `jual_beli` , request.params.jualBeliId)
      const verifikasiPembelianlId = await this._service.setVerifikasi('pembeli', request.params.jualBeliId, request.query.status);
      const response = await this._response(h, 201, {verifikasiPembelianlId} , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }  
}

  module.exports = Handler;