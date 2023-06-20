const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(dummy) {
    this._Dummy = dummy;
    this._response = ( h, status, message, data ) => {
      const response = h.response({ status, message, data, });
      return response;
    }

    autoBind(this);
  }
 
  async getLocation(request, h) {
    try {
      const lokasi = await this._Dummy.dataLokasi(request.params.id_location);
      const response =  await this._response(h, 'success', { lokasi, });
      response.code(200);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async getSubLocation(request, h) {
    try {
      const lokasi = await this._Dummy.dataSubLokasi(request.params.id_kategori);
      const response =  await this._response(h, 'success', { lokasi, });
      response.code(200);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

module.exports = Handler;