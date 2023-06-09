const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor (service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postUserBuruh(request, h) {
    try {
      this._validator.buruh(request.payload);
      const userId = await this._service.addUserB(request.payload);
      const response = h.response({
        status: 'success',
        message: `User berhasil ditambahkan dengan id '${userId}'.`,
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