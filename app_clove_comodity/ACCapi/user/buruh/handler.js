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
      console.log('scs')
      this._validator.addBuruh(request.payload);
      console.log('scs')
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

  async getUserBuruh( h) {
    try {
      const user = await this._service.getUserBuruh(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
        data: {
          user,
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
  async updateUserBuruh(request, h) {
    try {
      this._validator.updateBuruh(request.payload);
      const user = await this._service.updateUserBuruh(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
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
  async updateSandiUserBuruh(request, h) {
    try {
      this._validator.updatePasswordBuruh(request.payload);
      const user = await this._service.updateSandiUserBuruh(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
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
  async updateLupaSandiUserBuruh(request, h) {
    try {
      this._validator.buruh(request.payload);
      const user = await this._service.updateLupaSandiUserBuruh(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
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
  async deleteUserBuruh(request, h) {
    try {
      const user = await this._service.deleteUserBuruh(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
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