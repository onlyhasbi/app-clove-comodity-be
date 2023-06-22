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





//handler lahan 
  async addLahanHandler(request, h) {
    try {
      await this._validator.lahan(request.payload);
      const lahanId = await this._service.addLahan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { lahanId, }, `Lahan berhasil ditambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getLahanHandler(request, h) {
    try {
      const lahan = await this._service.getLahan(request.auth.credentials.id);
      const response = await this._response(h, 'success', { lahan, });
      response.code(200);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async editLahanHandler(request, h) {
    try {
      await this._validator.lahan(request.payload);
      await this._validator.lahanId(request.params);
      await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId)
      const lahanId = await this._service.editLahan(  request.params.lahanId, request.payload);
      const response = await this._response('Success', { lahanId, } , 'Data lahan berhasil diubah')
      response.code(201);
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteLahanHandler(request, h) {
    try {
      await this._validator.lahanId(request.params);
      await this._author.verifyUser(request.auth.credentials.id,`lahan` , request.params.lahanId)
      await this._service.deleteLahan(request.params.lahanId);
      const response = await this._response('Success', undefined , 'Data lahan berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }







  // handler Setoran 
  async addSetoranHandler(request, h) {
    try {
      await this._validator.setoran(request.payload);
      const lahanId = await this._service.addSetoran(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { lahanId, }, `setoran berhasil ditambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getSetoranHandler(request, h) {
    try {
      const setoran = await this._service.getSetoran(request.auth.credentials.id);
      const response = await this._response(h, 'success', { setoran, });
      response.code(200);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async editSetoranHandler(request, h) {
    try {
      await this._validator.setoran(request.payload);
      await this._validator.setoranId(request.params);
      await this._author.verifyUser(request.auth.credentials.id, `setoran` , request.params.setoranId)
      const lahanId = await this._service.editSetoran(  request.params.setoranId, request.payload);
      const response = await this._response('Success', { lahanId, } , 'Data setoran berhasil diubah')
      response.code(201);
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteSetoranHandler(request, h) {
    try {
      await this._validator.setoranId(request.params);
      await this._author.verifyUser(request.auth.credentials.id,`setoran` , request.params.setoranId)
      await this._service.deleteSetoran(request.params.setoranId);
      const response = await this._response('Success', undefined , 'Data setoran berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }









  // handler HasilPanen 
  async addHasilPanenHandler(request, h) {
    try {
      await this._validator.hasilPanen(request.payload);
      const hasilPanenId = await this._service.addHasilPanen(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { hasilPanenId, }, `data hasil panen berhasil ditambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getHasilPanenHandler(request, h) {
    try {
      const hasilPanen = await this._service.getHasilPanen(request.auth.credentials.id);
      const response = await this._response(h, 'success', { hasilPanen, });
      response.code(200);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async edithasilPanenHandler(request, h) {
    try {
      await this._validator.hasilPanen(request.payload);
      await this._validator.hasilPanenId(request.params);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_panen` , request.params.hasilPanenId)
      const hasilPanenId = await this._service.edithasilPanen(  request.params.hasilPanenId, request.payload);
      const response = await this._response('Success', { hasilPanenId, } , 'Data hasil panen berhasil diubah')
      response.code(201);
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deletehasilPanenHandler(request, h) {
    try {
      await this._validator.hasilPanenId(request.params);
      await this._author.verifyUser(request.auth.credentials.id,`hasil_panen` , request.params.hasilId)
      await this._service.deletehasilPanen(request.params.hasilId);
      const response = await this._response('Success', undefined , 'Data hasil panen berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }







  
  // handler setoranHasilPanen 
  async addSetoranHasilPanenHandler(request, h) {
    try {
      await this._validator.hasilPanenId(request.params);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_panen` , request.params.hasilPanenId);
      await this._validator.setoranHasilPanen(request.payload); // ARRAY VARIABEL SETORAN DENGAN DATA BERUPA OBJECT YANG MEMILIKI ATU PROPERTY YAITU setoranId
      await request.payload.setoran.forEach(setoran => {
        this._validator.setoranId(setoran);
        this._author.verifyUser(request.auth.credentials.id, `setoran`, setoran.setoranId);
        this._author.chekNoIdInTable(`link_hasil_setoran` , setoran.setoranId);
      });

      const setoranHasilPanen = await this._service.addSetoranHasilPanen(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { setoranHasilPanen, }, `data setoran hasil panen berhasil ditambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getSetoranHasilPanenHandler(request, h) {
    try {
      await this._validator.hasilPanenId(request.params);
      await this._author.verifyUser(request.auth.credentials.id, `hasil_panen` , request.params.hasilPanenId);
      const setoranHasilPanen = await this._service.getSetoranHasilPanen(request.auth.credentials.id, request.params);
      const response = await this._response(h, 'success', { setoranHasilPanen });
      response.code(200);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteSetoranhasilPanenHandler(request, h) {
    try {
      await this._validator.setoranId(request.params);
      await this._author.verifyUser(request.auth.credentials.id,`setoran` , request.params.setoranId);
      await this._author.chekIdInTable(`link_hasil_setoran` , request.params.setoranId);
      await this._service.deleteSetoranHasilPanen(request.params.setoranId);
      const response = await this._response('Success', undefined , 'Data setoran berhasil dihapus');
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
}

  module.exports = Handler;