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
      const userId = await this._service.addKontak(`kontak_acc`, request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { userId, }, `kontak ditambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getKontakHandler(request, h) {
    try {
      const kontak = await this._service.getKontak(`kontak_acc` , request.auth.credentials.id);
      const response = await this._response(h, 'success', { kontak });
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
      const response = await this._response(h, 'Success', { kontakId, } , 'Data kontak berhasil diubah')
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
      await this._validator.Kontak(request.payload);
      const userId = await this._service.addKontakBuruh(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { userId, }, `User berhasil ditambahkan dengan id`);
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
      const kontak = await this._service.getKontakBuruh(request.auth.credentials.id);
      const response = await this._response(h, 'success', { kontak });
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
      await this._validator.Kontak(request.payload);
      await this._validator.KontakId(request.params);
      await this._dataChek.checkId('kontak', request.params.kontakId);
      const kontakId = await this._service.editBuruhKontak(request.params, request.auth.credentials.id, request.payload);
      const response = await this._response('Success', { kontakId, } , 'Data kontak berhasil diubah')
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
      await this._validator.idKontak(request.params);
      await this._dataChek.checkId('kontak', request.params.kontakId);
      await this._service.deleteBuruhKontak(request.params);
      const response = await formatResponse('Success', undefined , 'Data kontak berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }   

//HANDLER PENAWARAN   
async addPenawaranKomoditiHandler(request, h) {
  try {
    await this._validator.Kontak(request.payload);
    const userId = await this._service.addKontakBuruh(request.auth.credentials.id, request.payload);
    const response = await this._response( h, 'success',  { userId, }, `User berhasil ditambahkan dengan id`);
    response.code(201);
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
};

async getPenawaranKomoditiHandler(request, h) {
  try {
    const kontak = await this._service.getKontakBuruh(request.auth.credentials.id);
    const response = await this._response(h, 'success', { kontak });
    response.code(200);
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
};

async editPenawaranKomoditiHandler(request, h) {
  try {
    await this._validator.Kontak(request.payload);
    await this._validator.KontakId(request.params);
    await this._dataChek.checkId('kontak', request.params.kontakId);
    const kontakId = await this._service.editBuruhKontak(request.params, request.auth.credentials.id, request.payload);
    const response = await this._response('Success', { kontakId, } , 'Data kontak berhasil diubah')
    response.code(201);
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}

async deletePenawaranKomoditiHandler(request, h) {
  try {
    await this._validator.idKontak(request.params);
    await this._dataChek.checkId('kontak', request.params.kontakId);
    await this._service.deleteBuruhKontak(request.params);
    const response = await formatResponse('Success', undefined , 'Data kontak berhasil dihapus')
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