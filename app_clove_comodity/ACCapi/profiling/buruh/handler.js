const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require('auto-bind');


class Handler {
  constructor(service, validator , author) {
    this._service = service;
    this._validator = validator;
    this._author = author;
    this._response = ( h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }
    autoBind(this);   
  }




// handler kontak buruh 
  async addKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      const kontakId = await this._service.addKontak(`kontak_buruh`, request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  {kontakId}, `kontak di tambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };
  async getKontakHandler(request, h) {
    try {
      const kontak = await this._service.getKontak(`kontak_buruh` , request.auth.credentials.id);
      const response = await this._response(h, 200, kontak );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      await this._author.verifyUser(request.auth.credentials.id,`kontak_buruh` , request.params.kontakId)
      const kontakId = await this._service.updateKontak(`kontak_buruh` , request.auth.credentials.id, request.params.kontakId, request.payload);
      const response = await this._response(h, 201, {kontakId} , 'Data kontak berhasil diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteKontakHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`kontak_buruh` , request.params.kontakId)
      await this._service.deleteKontak(`kontak_buruh` , request.params.kontakId);
      const response = await this._response(h, 201, undefined , 'Data kontak berhasil dihapus')
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }








// handler lamaran_kerja_terbuka buruh 
  async addLamaranHandler(request, h) {
    try {
      await this._validator.lamaran(request.payload);
      const lamaranId = await this._service.addLamaran(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  {lamaranId}, `lamaran kerja di tambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };
  async getLamaranHandler(request, h) {
    try {
      const lamaranKerja = await this._service.getLamaran(request.auth.credentials.id);
      const response = await this._response(h, 200, lamaranKerja);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editLamaranHandler(request, h) {
    try {
      await this._validator.lamaran(request.payload);
      await this._author.verifyUser(request.auth.credentials.id,`lamaran_kerja` , request.params.lamaranId)
      const lamaranKerjaId = await this._service.updateLamaran(request.auth.credentials.id, request.params.lamaranId, request.payload);
      const response = await this._response(h, 201, {lamaranKerjaId} , 'Data lamran kerja diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editStatusLamaranHandler(request, h) {
    try {
      await this._validator.status(request.query);
      await this._author.verifyUser(request.auth.credentials.id,`lamaran_kerja` , request.params.lamaranId)
      const lamaranKerja = await this._service.updateStatusLamaran(request.auth.credentials.id, request.params.lamaranId, request.query);
      const response = await this._response(h, 201, lamaranKerja , 'status lamran kerja diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteLamaranHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`lamaran_kerja` , request.params.lamaranId)
      await this._service.deleteLamaran(request.params.lamaranId);
      const response = await this._response(h, 201, undefined , 'Data lamaran kerja dihapus')
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
}
module.exports = Handler;