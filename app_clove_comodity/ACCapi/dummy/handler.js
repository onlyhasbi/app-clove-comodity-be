const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(dummy, validator) {
    this._dummy = dummy;
    this._validator = validator;

    autoBind(this);
  }
 
  async getLocation(request, h) {
    try {
      this._validator.location(request.params);
      const location = this._dummy.chek(request.params);
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
      this._validator.sublocation(request.params);
      const sub_location = this._dummy.filter(request.params);
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