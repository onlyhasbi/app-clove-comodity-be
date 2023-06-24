const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');


class Handler {
  constructor (service, dummy, validator, authentic) {
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

  async postUserBuruh(request, h) {
    try {
      await this._validator.addBuruh(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.addUserBuruh(request.payload);
      const response =  await this._response(h, 201, {userId},  `berhasill berhasil terdaftar sebagai user Buruh'.`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getUserBuruh(request , h) {
    try {
      const user = await this._service.getUserBuruh(request.auth.credentials.id);
      const response =  await this._response( h, 200, {user});
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async updateUserBuruh(request, h) {
    try {
      await this._validator.updateBuruh(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.updateUserBuruh(request.auth.credentials.id, request.payload);
      const response =  await this._response(h, 201, {userId},  `berhasil merubah data user Buruh.`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async updateSandiUserBuruh(request, h) {
    try {
      await this._validator.updateSandiUser(request.payload);
      const permission_id = await this._authentic.verifyUserCredential('owner_user_buruh', request.payload);
      const userId = await this._service.updateSandiUser('owner_user_buruh', request.auth.credentials.id, permission_id, request.payload.sandi_baru);
      const response =  await this._response(h, 201, {userId},  `berhasil mengganti sandi user Buruh.`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  //async updateLupaSandiUserBuruh(request, h) {}
  async deleteUserBuruh(request, h) {
    try {
      await this._validator.deleteUser(request.payload);
      const permission_id = await this._authentic.verifyUserCredential('owner_user_buruh' , request.payload);
      const userId = await this._service.deleteUser("owner_user_buruh", request.auth.credentials.id, permission_id);
      const response =  await this._response(h, 201, {userId},  `berhasil menghapus user Buruh.`);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }

}

module.exports = Handler;