const responseCatch = require('../../../exception/responHandlerCatch')
const autoBind = require('auto-bind');


class Handler {
  constructor (service, dummy, validator, author) {
    this._service = service;
    this._dummy = dummy;
    this._validator = validator;
    this._author = author;

    autoBind(this);
  }

  async postUserBuruh(request, h) {
    try {
      this._validator.addBuruh(request.payload);
      const userId = await this._service.addUserBuruh(request.payload);
      const response = h.response({
        status: 'success',
        message: `berhasil berhasil terdaftar sebagai user Buruh'.`,
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

  async getUserBuruh(request , h) {
    try {
      console.log(request.auth.credentials.id)
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
      const userId = await this._service.updateUserBuruh(request.auth.credentials.id, request.payload);
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
  // async updateSandiUserBuruh(request, h) {
  //   try {
  //     this._validator.updatePasswordBuruh(request.payload);
  //     const {nomor_telpon, sandi_lama, sandi_baru} = request.payload;
  //     this._author.verifyUserCredential('buruh' , {nomor_telpon, sandi_lama}):
  //     const user = await this._service.updateSandiUserBuruh(request.auth.credentials.id , sandi_baru);
  //     const response = h.response({
  //       status: 'success',
  //       data: {
  //         userId,
  //       },
  //     });
  //     response.code(201);
  //     return response;
  //   } 
  //   catch (error ) { 
  //     const response = await responseCatch(error, h); 
  //     return response;
  //   }
  // }
  // async updateLupaSandiUserBuruh(request, h) {
  //   try {
  //     this._validator.buruh(request.payload);
  //     const user = await this._service.updateLupaSandiUserBuruh(request.auth.credentials.id);
  //     const response = h.response({
  //       status: 'success',
  //       data: {
  //         userId,
  //       },
  //     });
  //     response.code(201);
  //     return response;
  //   } 
  //   catch (error ) { 
  //     const response = await responseCatch(error, h); 
  //     return response;
  //   }
  // }
  async deleteUserBuruh(request, h) {
    try {
      await this._validator.deleteBuruh(request.payload);
      const Id = await this._author.verifyUserCredential('buruh' , request.payload);
      console.log(Id , request.auth.credentials.id)
      const userId = await this._service.deleteUserBuruh(request.auth.credentials.id);
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