const NotFoundError = require('../../../exception/notFoundErr');
const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require('auto-bind');


class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator = validator;
    this._author = author;


    autoBind(this);
    
  }

  async postKontakBuruh(request, h) {
    try {
      this._validator.addKontakBuruh(request.payload);
      const { jenis_kontak, kontak } = request.payload;
    
  
      const userId = await this._service.addKontak( { jenis_kontak, kontak });
      const response = h.response({
        status: 'success',
        message: 'berhasil menambahkan kontak buruh',
        data: {
          userId,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error(error);
      const response = await responseCatch(error, h);
      return response;
    }
  }
}

module.exports = Handler;