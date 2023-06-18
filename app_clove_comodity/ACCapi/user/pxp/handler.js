const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {

  constructor (service, validator, author) {
    this._service = service;
    this._validator = validator;
    this._author = author;
    
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
  async updateSandiUserPetani(request, h) {
    await this._validator.updateSandiAcc(request.payload);
    const {nomor_telpon, sandi_lama, sandi_baru} = request.payload;
    await this._author.verifyUserCredential('pxp' , { nomor_telpon, sandi_lama });
    const userId = await this._service.updateSandiUserAcc(request.auth.credentials.id, sandi_baru);
    const response = h.response({
      status: 'success',
      data: {
        userId,
      },
    });
    response.code(201);
    return response;

  }
  // async updateLupaSandiUserPetani(request, h) {}
  async deleteUserPetani(request, h) {
    try {
      await this._validator.deleteAcc(request.payload);
      await this._author.verifyUserCredential('pxp' , request.payload);
      const userId = await this._service.deleteUserAcc(request.auth.credentials.id);
      const response = h.response({
        status: 'success',
        data: {
          userId,
        },
      });
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