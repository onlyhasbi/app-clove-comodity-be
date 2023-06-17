const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(service) {
    this._Service = service;

    autoBind(this);
  }
 
  async getLocation(request, h) {
    try {
      const location = await this._Service.check(request.params.id_location);
      const response = h.response({
        status: 'success',
        data: {
          location,
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
      console.log(request.params.id_kategori)
      const sub_location = await this._Service.filter(request.params.id_kategori);
      const response = h.response({
        status: 'success',
        data: {
         sub_location,
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