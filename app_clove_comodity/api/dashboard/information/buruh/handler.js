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
  }


  async lowonganHandler() {
    try {
      const data = await this._service.getlamaran(request.payload);
      const response = await this._response(h, data );
      return response;
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async lowonganByIdHandler() {}
  async relasiHandler () {}

}

  module.exports = Handler;