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
      this._validator.pxp(request.payload);
      const userId = await this._service.addUserPxP(request.payload);
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

  async getUserPetaniWithID( h) {}
  async updateUserPetaniWithID(request, h) {}
  async updateSandiUserPetaniWithID(request, h) {}
  async updateLupaSandiUserPetaniWithID(request, h) {}
  async deleteUserPetaniWithID(request, h) {}
}

  module.exports = Handler;