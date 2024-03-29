const responseCatch = require('../../../exception/responseHandlerCatch')
const autoBind = require('auto-bind');

class Handler {

  constructor (service,  dummy, validator,  authentic) {
    this._service = service;
    this._dummy = dummy;
    this._validator = validator;
    this._authentic = authentic;
    this._response = (h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }
    
    autoBind(this);
  }

  async addUserAcc(request, h) {
    try {
      await this._validator.addAcc(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.addUserAcc(request.payload);
      const response =  await this._response(h, 201, {userId},  `berhasil terdaftar sebagai user ACC'.`);
      return response;
    } 
    catch (error) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getUserAcc(request, h) {
    try {
      const user = await this._service.getUserAcc(request.auth.credentials.id);
      const response =  await this._response( h, 200, {user});
      return response;
    } 
    catch (error) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async updateUserAcc(request, h) {
    try {
      await this._validator.updateAcc(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.updateUserAcc(request.auth.credentials.id, request.payload);
      const response =  await this._response(h, 201, { userId },  `berhasil merubah data user acc.`);
      return response;
    } 
    catch (error) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async updateSandiUserAcc(request, h) {
    try {
      await this._validator.updateSandiUser(request.payload);
      const permission_id = await this._authentic.verifyUserCredential('owner_user_acc', request.payload);
      const userId = await this._service.updateSandiUser('owner_user_acc', request.auth.credentials.id, permission_id, request.payload.sandi_baru);
      const response =  await this._response(h, 201, {userId},  `berhasil mengganti sandi user acc.`);
      return response;
    } 
    catch (error) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  // async updateLupaSandiUserPetani(request, h) {}
  async deleteUserAcc(request, h) {
    try {
      await this._validator.deleteUser(request.payload);
      const permission_id = await this._authentic.verifyUserCredential('owner_user_acc' , request.payload);
      const userId = await this._service.deleteUser("owner_user_acc", request.auth.credentials.id, permission_id);
      const response =  await this._response(h, 201, { userId },  `berhasil menghapus user acc.`);
      return response;
    } 
    catch (error) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

  module.exports = Handler;