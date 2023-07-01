const responseCatch = require('../../../exception/responHandlerCatch')


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
  async addPenjualanHandler () {
    try {
      await this._validator.penjualan(request.payload);
      const jualBeliId = await this._service.addPenjualan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201 ,  { jualBeliId, }, `data penjualan berhasil ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }    
  }
  async getPenjualanHandler() {
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
  async editPenjualanHandler() {
    try {
      await this._validator.penjualan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      const jualBeliId = await this._service.updatePenjualan(  request.auth.credentials.id, request.params.jualBeliId, request.payload);
      const response = await this._response(h, 201, { jualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deletePenjualanHandler() {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      await this._service.deletePenjualan(request.params.jualBeliId);
      const response = await this._response(h, 201, undefined , 'Data lahan berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  
//handler pembelian  
  async addPembelianHandler () {
    try {
      await this._validator.pembelian(request.payload);
      const jualBeliId = await this._service.addPembelian(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  { jualBeliId, }, `data penjualan berhasil ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getPembelianHandler() {
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
  async editPembelianHandler() {
    try {
      await this._validator.pembelian(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      const jualBeliId = await this._service.updatePembelian(  request.auth.credentials.id, request.params.jualBeliId, request.payload);
      const response = await this._response(h, 201, { jualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deletePembelianHandler() {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      await this._service.deletePembelian(request.params.jualBeliId);
      const response = await this._response(h, 201, undefined , 'Data lahan berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }


//handler jual-beli  
  async getJualBeliHandler() {
    try {
      const jualBeliUser = await this._service.getJualBeli(request.auth.credentials.id);
      const response = await this._response(h, 200, jualBeliUser );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getJualBeliByIdHandler() {
    try {
      const jualBeliUser = await this._service.getJualBeli(request.params.jualBeliId);
      const response = await this._response(h, 200, jualBeliUser );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }


//handler data kelengkapan jual-beli  
  async setEditorHandler() {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      const editorJualBeliId = await this._service.setEditor(request.params.jualBeliId, request.query.value);
      const response = await this._response(h, 201, { editorJualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async verifikasiPenjualanHandler () {
    try {
      //  verifikasi non_owner_user //await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      const editorJualBeliId = await this._service.setVerifikasiPenjualan(request.params.jualBeliId, request.query.value);
      const response = await this._response(h, 201, { editorJualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async verifikasiPembelianHandler () {
    try {
      //  verifikasi non_owner_user //await this._author.verifyUser(request.auth.credentials.id, `jual-beli` , request.params.jualBeliId)
      const verifikasiJualBeliId = await this._service.setVerifikasiPembelian(request.params.jualBeliId, request.query.value);
      const response = await this._response(h, 201, { verifikasiJualBeliId } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }  
}

  module.exports = Handler;