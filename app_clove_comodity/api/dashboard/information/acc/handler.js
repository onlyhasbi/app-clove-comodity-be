const responseCatch = require('../../../../exception/responseHandlerCatch');
const autoBind = require ('auto-bind');

class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator =validator;
    this._author = author;
    this._response = (h, data) => {
      const response = h.response({ status: "success", data });
      response.code(200);
      return response;
    }

    autoBind(this);
}

//handler penjualan
  async lamaranHandler(request, h) {
    try {
      await this._validator.lamaran(request.payload);
      await this._service.verifyUserAcc(request.auth.credentials.id, `owner_user_acc`);
      const data = await this._service.getlamaran(request.payload);
      const response = await this._response(h, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async buruhHandler(request, h) {
    try {
      await this._service.verifyUserAcc(request.auth.credentials.id, `owner_user_acc`);
      const data = await this._service.getBuruh(request.payload.buruhId);
      const response = await this._response(h, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async relasiHandler(request, h) {
    try {
      await this._validator.relasi(request.query);
      await this._service.verifyUserAcc(request.auth.credentials.id, `owner_user_acc`);
      const data = await this._service.getRelasi(request.payload);
      const response = await this._response(h, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async penawaranHandler(request, h) {
    try {
      await this._validator.penawaran(request.payload);
      await this._service.verifyUserAcc(request.auth.credentials.id, `owner_user_acc`);
      const data = await this._service.getPenawaran(request.payload);
      const response = await this._response(h, data );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
}

  module.exports = Handler;