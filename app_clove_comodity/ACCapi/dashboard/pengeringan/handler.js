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
//handler tim pengeringan
  async addTimPengeringanHandler(request, h) {
    try {
      await this._validator.timPengeringan(request.payload);
      const timPengeringanId = await this._service.addTimPengeringan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  { timPengeringanId }, `menambahkan tim pengeringan`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async getTimPengeringanHandler(request, h) {
    try {
      const timPengeringan = await this._service.getTimPengeringan(request.auth.credentials.id);
      const response = await this._response(h, 200, timPengeringan );
      return response;  
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async putTimPengeringanHandler(request, h) {
    try {
      await this._validator.timPengeringan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.params.timId);
      const timPengeringanId = await this._service.updateTimPengeringan(  request.auth.credentials.id, request.params.timId, request.payload);
      const response = await this._response(h, 201, { timPengeringanId, } , 'Data Tim pengeringan berhasil diubah');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteTimPengeringanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`tim_pengeringan` , request.params.timId);
      await this._service.deleteTimPengeringan(request.params.lahanId);
      const response = await this._response(h, 201, undefined , 'Data TimPengeringan berhasil dihapus');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }


//handler anggota tim pengeringan
  async addAnggotaTimHandler(request, h) {
    try {
      await this._service.chekAnggotaTim('ada', request.params.anggotaTimId, request.params.timId);
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.params.timId);
      const anggotaTimId = await this._service.addAnggotaTim(request.payload, request.params.timId);
      const response = await this._response( h, 201,  { anggotaTimId }, `Anggota tim berhasil ditambahkan ke dalam tim`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async getAnggotaTimHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.params.timId);
      const anggotaTim = await this._service.getAnggotaTim(request.params.timId);
      const response = await this._response(h, 200, anggotaTim );
      return response;  
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteAnggotaTimHandler(request, h) {
    try {
      await this._service.chekAnggotaTim('tidak ada', request.params.anggotaTimId, request.params.timId);
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.params.anggotaTimId);
      await this._service.deleteLahan(request.payload, request.params.timId);
      const response = await this._response(h, 201, undefined , 'Anggota tim berhasil dihapus');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  
  

//handler bahan pengeringan
  async addBahanHandler(request, h) {
    try {
      await this._validator.bahan(request.payload);
      const bahanPengeringanId = await this._service.addBahan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  {bahanPengeringanId}, `bahan pengeringan berhasil ditambahkan`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async getBahanHandler(request, h) {
    try {
      const bahanPengeringan = await this._service.getBahan(request.auth.credentials.id);
      const response = await this._response(h, 200, bahanPengeringan );
      return response;  
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async putBahanHandler(request, h) {
    try {
      await this._validator.bahan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `bahan_pengeringan` , request.params.bahanId);
      const BahanPengeringanId = await this._service.updateBahan(  request.auth.credentials.id, request.params.bahanId, request.payload);
      const response = await this._response(h, 201, { BahanPengeringanId } , 'Data bahan pengeringan berhasil diubah');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteBahanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`bahan_pengeringan` , request.params.bahanId);
      await this._service.deleteLahan(request.params.bahanId);
      const response = await this._response(h, 201, undefined , 'Data bahan pengeringan berhasil dihapus');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }


//hasil pengeringan
  async addHasilHandler(request, h) {
    try {
      await this._validator.hasil(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.payload.tim_pengeringan);
      const hasilPengeringanId = await this._service.addHasil(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  { hasilPengeringanId, }, `hasil pengeringan berhasil ditambahkan`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async getHasilHandler(request, h) {
    try {
      const hasilPengeringan = await this._service.getHasil(request.auth.credentials.id);
      const response = await this._response(h, 200, hasilPengeringan );
      return response;  
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async putHasilHandler(request, h) {
    try {
      await this._validator.hasil(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_pengeringan` , request.params.hasilId);
      await this._author.verifyUser(request.auth.credentials.id, `tim_pengeringan` , request.payload.tim_pengeringan);
      const hasilPengeringanId = await this._service.updateHasil(  request.auth.credentials.id, request.params.hasilId, request.payload);
      const response = await this._response(h, 201, { hasilPengeringanId } , 'Data hasil pengeringan berhasil diubah');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteHasilHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `hasil_pengeringan` , request.params.hasilId);
      await this._service.deleteHasiln(request.params.hasilId);
      const response = await this._response(h, 201, undefined , 'Data hasil pengeringan berhasil dihapus');
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async postLinkBahanPadaHasilPengeringanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `bahan_pengeringan` , request.params.bahanId);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_pengeringan` , request.params.hasilId);
      await this._service.addHasil(request.params.bahanId, request.params.hasilId);
      const response = await this._response( h, 201,  undefined, `menetapkan bahan yang dikeringkan pada hasil pengeringan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async deleteLinkBahanPadaHasilPengeringanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id, `bahan_pengeringan` , request.params.bahanId);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_pengeringan` , request.params.hasilId);
      await this._service.deleteHasil(request.params.bahanId, request.params.hasilId);
      const response = await this._response( h, 201,  undefined, `menetapkan bahan yang dikeringkan tidak pada hasil pengeringan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

  module.exports = Handler;