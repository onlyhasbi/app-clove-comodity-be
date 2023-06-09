const responseCatch = require('../../exception/responHandlerCatch')
const InvariantError = require('../../exception/invariantErr')
const notFoundError = require('../../exception/notFoundErr')

class testHandler {

  async test(request, h) {
    try {
      let siapa;   
      if (!siapa) {throw new notFoundError(`tarada`);}
      if (siapa) {throw new InvariantError(`errorki`);}
      const response = h.response({
        status: 'success',
        message : 'uji koneksi pluginji ini di server',
        data: 345 ,
        pemilik: siapa,
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

  module.exports = testHandler;