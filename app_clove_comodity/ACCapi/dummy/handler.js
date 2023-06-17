const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(dummy) {
    this._Dummy = dummy;

    autoBind(this);
  }
 
  async getLocation(request, h) {
    try {
      const lokasi = await this._Dummy.dataLokasi(request.params.id_location);
      const response = h.response({
        status: 'success',
        data: {
          lokasi,
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
  async getSubLocation(request, h) {
    try {
      const lokasi = await this._Dummy.dataSubLokasi(request.params.id_kategori);
      const response = h.response({
        status: 'success',
        data: {
         lokasi,
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