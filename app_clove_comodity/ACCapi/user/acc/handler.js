const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {

  constructor (service, validator, authentic) {
    this._service = service;
    this._validator = validator;
    this._authentic = authentic;
    this._response = (h, status, data, message) => {
      const response = h.response({ status, message, data, });
      return response;
    }
    
    autoBind(this);
  }

  async addUserAcc(request, h) {
    try {
      this._validator.addAcc(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.addUserAcc(request.payload);
      const response =  await this._response(h, 'success', { userId },  `berhasill berhasil terdaftar sebagai user ACC'.`);
      response.code(201);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getUserAcc(request, h) {
    try {
      console.log(request.auth.credentials.id)
      const user = await this._service.getUserAcc(request.auth.credentials.id);
      const response =  await this._response( h, 'success', { user });
      response.code(201);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  async updateUserAcc(request, h) {
    try {
      this._validator.updateAcc(request.payload);
      await this._dummy.chekIdLokasi(request.payload.alamat);
      const userId = await this._service.updateUserAcc(request.auth.credentials.id, request.payload);
      const response =  await this._response(h, 'success', { userId },  `berhasil merubah data user acc.`);
      response.code(201);
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
    }
  }
  // async updateSandiUserPetani(request, h) {
  //   try {
  //     await this._validator.updateSandiAcc(request.payload);
  //     const {nomor_telpon, sandi : sandi_lama , sandi_baru} = request.payload;
  //     const permission_id = await this._author.verifyUserCredential('owner_user_acc' ,{ nomor_telpon, sandi });
  //     const userId = await this._service.updateSandiUserAcc(request.auth.credentials.id, permission_id, sandi_baru);
  //     const response =  await this._response(h, 'success', { userId },  `berhasil merubah sandi user acc.`);
  //     response.code(201);
  //     return response;
  //   } 
  //   catch (error ) { 
  //     const response = await responseCatch(error, h); 
  //     return response;
  //   }
  // }
  // async updateLupaSandiUserPetani(request, h) {}
  async deleteUserAcc(request, h) {
    try {
      await this._validator.deleteAcc(request.payload);
      const permission_id = await this._authentic.verifyUserCredential('owner_user_acc' , request.payload);
      const userId = await this._service.deleteUserAcc(request.auth.credentials.id, permission_id);
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