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
      const response = await this._response(h, 'success', lahan );
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
      await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId)
      const lahanId = await this._service.updateLahan(  request.auth.credentials.id, request.params.lahanId, request.payload);
      const response = await this._response(h, 'Success', { lahanId, } , 'Data lahan berhasil diubah')
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
      await this._author.verifyUser(request.auth.credentials.id,`lahan` , request.params.lahanId)
      await this._service.deleteLahan(request.params.lahanId);
      const response = await this._response(h, 'Success', undefined , 'Data lahan berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }






//handler lahan 
async addSetoranHandler(request, h) {
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

async getSetoranHandler(request, h) {
  try {
    const lahan = await this._service.getLahan(request.auth.credentials.id);
    const response = await this._response(h, 'success', lahan );
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
    await this._validator.lahan(request.payload);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId)
    const lahanId = await this._service.updateLahan(  request.auth.credentials.id, request.params.lahanId, request.payload);
    const response = await this._response(h, 'Success', { lahanId, } , 'Data lahan berhasil diubah')
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
    await this._author.verifyUser(request.auth.credentials.id,`lahan` , request.params.lahanId)
    await this._service.deleteLahan(request.params.lahanId);
    const response = await this._response(h, 'Success', undefined , 'Data lahan berhasil dihapus')
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