const responseCatch = require('../../../exception/responHandlerCatch')

class Handler {

  async postUserPxP(request, h) {
    try {
      this._validator.buruh(request.payload);
      const userId = await this._service.addUserPxP(request.payload);
 
      const response = h.response({
        status: 'success',
        message: `User PxP berhasil ditambahkan dengan id '${userId}'.`,
        data: {
          userId,
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
}

  module.exports = Handler;