const responseCatch = require('../../../../exception/responHandlerCatch')


class Handler {
  //user menambahkan data lahan 
  async postLahanbyUser(request, h) {
    try {
      this._validator.payloadLahan(request.payload);
      const lahanId = await this._service.addlahan(request.payload);
      const response = h.response({
        status: 'success',
        message: ``,
        data: {
          lahanId,
        },
      });
      response.code(201);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  //mengambil data lahan berdasarkan User
  async getLahanbyUser(h) {
    try{
      const lahan = await this._service.getlahanUser(request.auth.credentials);
    }
    catch{
      const response = await responseCatch(error, h); 
      return response;     
    }
  }
  //mengambil data lahan berdasarkan Id
  async getLahanbyId(request, h) {
    try{
      const lahan= await this._service.getlahanId(request.params);
    }
    catch{
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  //mengambil semua data lahan dengan klausa berdasarkan query
  async getLahan(request, h) {
    await this._validator.queryLahan(request.query);
    const lahan = await this._service.getlahan(request.query);
  }
  //user merubah data lahan berdasarkan id
  async putLahanbyId(request, h) {
    try {
      await this._validator.payloadLahan(request.payload);
      await this._author.verifyUser(request.params, request.auth.credentials);
      const lahanId = await this._service.updatelahan(request.payload);
      const response = h.response({
        status: 'success',
        message: ``,
        data: {
          lahanId,
        },
      });
      response.code(201);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  //user menghapus data lahan berdasarkan id
  async deleteLahanbyId(request, h) {
    try {
      await this._author.verifyUser(request.params, request.auth.credentials);
      const lahanId = await this._service.deleteLahan(request.params);
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

  module.exports = Handler;