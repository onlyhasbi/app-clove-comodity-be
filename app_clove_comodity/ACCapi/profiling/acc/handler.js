const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require ('auto-bind');

class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator =validator;
    this._author = author;
    this._response = ( h, code, data, message) => {
      const response = h.response({ status : "success", message, data, });
      response.code(code);
      return response;
    }
    autoBind(this);
  }



// handler kontak acc     
  async addKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      const kontakId = await this._service.addKontak(`kontak_acc`, request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201, {kontakId}, `kontak ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getKontakHandler(request, h) {
    try {
      const kontak = await this._service.getKontak(`kontak_acc` , request.auth.credentials.id);
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
      console.log(request.payload);
      await this._author.verifyUser(request.auth.credentials.id,`kontak_acc` , request.params.kontakId)
      const kontakId = await this._service.updateKontak(`kontak_acc` , request.auth.credentials.id, request.params.kontakId, request.payload);
      const response = await this._response(h, 201, {kontakId} , 'Data kontak berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteKontakHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`kontak_acc` , request.params.kontakId)
      await this._service.deleteKontak(`kontak_acc` , request.params.kontakId);
      const response = await this._response(h, 201, undefined , 'Data kontak berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }







// handler lowongan kerja
  async addLowonganHandler(request, h) {
    try {
      await this._validator.lowongan(request.payload);
      const lowonganId = await this._service.addLowongan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201, {lowonganId}, `lowongan kerja di tambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };
  async getLowonganHandler(request, h) {
    try {
      const lowonganKerja = await this._service.getLowongan(request.auth.credentials.id);
      const response = await this._response(h, 200, lowonganKerja);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editLowonganHandler(request, h) {
    try {
      await this._validator.lowongan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
      const lowonganKerjaId = await this._service.updateLowongan(request.auth.credentials.id, request.params.lowonganId, request.payload);
      const response = await this._response(h, 201, {lowonganKerjaId}, 'Data lamran kerja diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editStatusLowonganHandler(request, h) {
    try {
      await this._validator.status(request.query);
      await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
      const lowonganKerja = await this._service.updateStatusLowongan(request.auth.credentials.id, request.params.lowonganId, request.query);
      const response = await this._response(h, 201, lowonganKerja , 'status lowongan kerja diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteLowonganHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
      await this._service.deleteLowongan(request.params.lowonganId);
      const response = await this._response(h, 201, undefined , 'Data lowongan kerja dihapus')
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }   




  
// handler Penawaran
  async addPenawaranHandler(request, h) {
    try {
      await this._validator.penawaran(request.payload);
      const penawaranId = await this._service.addPenawaran(request.auth.credentials.id, request.payload);
      const response = await this._response(h, 201,  {penawaranId}, `penawaran_komoditi di tambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };
  async getPenawaranHandler(request, h) {
    try {
      const penawaran_komoditas = await this._service.getPenawaran(request.auth.credentials.id);
      const response = await this._response(h, 200, penawaran_komoditas);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editPenawaranHandler(request, h) {
    try {
      await this._validator.penawaran(request.payload);
      await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditas` , request.params.penawaranId)
      const penawaranId = await this._service.updatePenawaran(request.auth.credentials.id, request.params.penawaranId, request.payload);
      const response = await this._response(h, 201, {penawaranId} , 'Data penawaran komoditas  kerja diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editStatusPenawaranHandler(request, h) {
    try {
      await this._validator.status(request.query);
      await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditas` , request.params.penawaranId)
      const penawaran = await this._service.updateStatusPenawaran(request.auth.credentials.id, request.params.penawaranId, request.query);
      const response = await this._response(h, 201, penawaran , 'status penawaran komoditas  diubah')
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deletePenawaranHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditas` , request.params.penawaranId)
      await this._service.deletePenawaran(request.params.penawaranId);
      const response = await this._response(h, 201, undefined , 'Data penawaran komoditas  dihapus')
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }   
}

module.exports=Handler;