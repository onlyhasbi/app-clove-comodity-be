const responseCatch = require('../../../../exception/responseHandlerCatch');
const autoBind = require ('auto-bind');

class  UploadsHandler {

  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
    this._response = (h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }
    autoBind(this);
  }

  async postFotoProfilHandler(request, h) {
    try {
      const { cover } = request.payload;
      this._validator.validateCoverHeaders(cover.hapi.headers);
      await this._service.emptyFiles(request.params.id);
      const data = await this._service.writeFile(cover, cover.hapi, request.params.id);
      const response = await this._response(h, 201, data );
      return response;  
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteFotoProfilHandler(request, h) {
    try {
      await this._service.emptyFiles(request.params.id);
      const response = await this._response(h, 201,undefined, "foto profil di hapus" );
      return response;  
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
}

  module.exports =  UploadsHandler;