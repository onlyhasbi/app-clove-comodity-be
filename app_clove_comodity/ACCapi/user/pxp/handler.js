const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {

  constructor (service, validator) {
    this._service = service;
    this._validator = validator;
    
    autoBind(this);
  }

  async addUserPetani(request, h) {
    try {
      this._validator.addAcc(request.payload);
      const userId = await this._service.addUserAcc(request.payload);
      console.log(userId);
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

  async getUserPetani(request, h) {
    try {
      console.log(request.auth.credentials.id)
      const user = await this._service.getUserAcc(request.auth.credentials.id);
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
  async updateUserPetani(request, h) {
    try {
      this._validator.updateAcc(request.payload);
      const userId = await this._service.updateUserAcc(request.auth.credentials.id, request.payload);
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
  async updateSandiUserPetaniWithID(request, h) {}
  async updateLupaSandiUserPetaniWithID(request, h) {}
  async deleteUserPetaniWithID(request, h) {}
}

  module.exports = Handler;