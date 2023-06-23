const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require ('auto-bind');

class Handler {
  constructor(service, validator, author) {
      this._service = service;
      this._validator =validator;
      this._author = author;
      this._response = ( h, status, data, message) => {
          const response = h.response({ status, message, data, });
          return response;
        }
      autoBind(this);
  }



// handler kontak acc     
  async addKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      const kontakId = await this._service.addKontak(`kontak_acc`, request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  {kontakId}, `kontak ditambahkan`);
      response.code(201);
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
      const response = await this._response(h, 'success', kontak );
      response.code(200);
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
      const response = await this._response(h, 'Success', {kontakId} , 'Data kontak berhasil diubah')
      response.code(201);
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
      const response = await this._response(h, 'Success', undefined , 'Data kontak berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }







// handler lowongan kerja
    async addLowonganKerjaHandler(request, h) {
      try {
        await this._validator.lowongan(request.payload);
        const lowonganId = await this._service.addLowonganKerja(request.auth.credentials.id, request.payload);
        const response = await this._response( h, 'success',  {lowonganId}, `lowongan kerja di tambahkan`);
        response.code(201);
        return response;
      } 
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    };
    async getLowonganKerjaHandler(request, h) {
      try {
        const lowonganKerja = await this._service.getLowonganKerja(request.auth.credentials.id);
        const response = await this._response(h, 'success', lowonganKerja);
        response.code(200);
        return response;      
      } 
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }
    async editLowonganKerjaHandler(request, h) {
      try {
        await this._validator.lamaran(request.payload);
        await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
        const lowonganKerjaId = await this._service.updateLowonganKerja(request.auth.credentials.id, request.params.lowonganId, request.payload);
        const response = await this._response(h, 'Success', {lowonganKerjaId} , 'Data lamran kerja diubah')
        response.code(201);
        return response;
      }
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }
    async editStatusLowonganKerjaHandler(request, h) {
      try {
        await this._validator.status(request.query);
        await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
        const lowonganKerja = await this._service.updateStatusLowonganKerja(request.auth.credentials.id, request.params.lowonganId, request.query);
        const response = await this._response(h, 'Success', lowonganKerja , 'status lowongan kerja diubah')
        response.code(201);
        return response;
      }
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }
    async deleteLowonganKerjaHandler(request, h) {
      try {
        await this._author.verifyUser(request.auth.credentials.id,`lowongan_kerja` , request.params.lowonganId)
        await this._service.deleteLowonganKerja(request.params.lowonganId);
        const response = await this._response(h, 'Success', undefined , 'Data lowongan kerja dihapus')
        response.code(201);
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
        const penawaranId = await this._service.addPenawaranKerja(request.auth.credentials.id, request.payload);
        const response = await this._response( h, 'success',  {penawaranId}, `penawaran_komoditi di tambahkan`);
        response.code(201);
        return response;
      } 
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    };
    async getPenawaranHandler(request, h) {
      try {
        const penawaran_komoditi = await this._service.getPenawaranKerja(request.auth.credentials.id);
        const response = await this._response(h, 'success', penawaran_komoditi);
        response.code(200);
        return response;      
      } 
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }
    async editPenawaranHandler(request, h) {
      try {
        await this._validator.lamaran(request.payload);
        await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditi` , request.params.lowonganId)
        const penawaranId = await this._service.updatePenawaranKerja(request.auth.credentials.id, request.params.lowonganId, request.payload);
        const response = await this._response(h, 'Success', {penawaranId} , 'Data penawaran_komoditi  kerja diubah')
        response.code(201);
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
        await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditi` , request.params.penawaranId)
        const penawaran = await this._service.updateStatusPenawaran(request.auth.credentials.id, request.params.penawaranId, request.query);
        const response = await this._response(h, 'Success', penawaran , 'status penawaran_komoditi  diubah')
        response.code(201);
        return response;
      }
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }
    async deletePenawaranHandler(request, h) {
      try {
        await this._author.verifyUser(request.auth.credentials.id,`penawaran_komoditi` , request.params.penawaranId)
        await this._service.deletePenawaran(request.params.penawaranId);
        const response = await this._response(h, 'Success', undefined , 'Data penawaran komoditi  dihapus')
        response.code(201);
        return response;
      } 
      catch (error) {
        const response = await responseCatch(error, h);
        return response;
      }
    }   
}

module.exports=Handler;