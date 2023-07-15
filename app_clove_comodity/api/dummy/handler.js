const responseCatch = require('../../exception/responseHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(service) {
    this._service = service;
    this._response = ( h, message, data ) => {
      const response = h.response({ status:"success", message, data, });
      response.code(200);
      return response;
    }

    autoBind(this);
  }
 async tes( h) {
  try {
    const lokasi = "gunung buki laut";
    const response =  await this._response(h, {lokasi});
    return response; 
  } 
  catch (error) {
    const response = await responseCatch(error, h); 
    return response;
  }
 }
  async getLocation(request, h) {
    try {
      const lokasi = await this._service.dataLokasi(request.params.id_location);
      const response =  await this._response(h, {lokasi});
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async getSubLocation(request, h) {
    try {
      const lokasi = await this._service.dataSubLokasi(request.params.id_kategori);
      const response =  await this._response(h, {lokasi});
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

module.exports = Handler;