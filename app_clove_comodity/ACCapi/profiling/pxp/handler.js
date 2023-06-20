const responseCatch = require('../../../exception/responHandlerCatch')
const NotFoundError = require('../../../exception/notFoundErr');
const autoBind = require ('auto-bind')

class Handler {
    constructor(service, validator) {
        this._service = service;
        this._validator =validator;
        this._response = ( h, status, data, message) => {
            const response = h.response({ status, message, data, });
            return response;
          }

        autoBind(this);
    }

    async addBuruhKontakHandler(request, h) {
        try {
          await this._validator.Kontak(request.payload);
          const userId = await this._service.addKontakBuruh(request.auth.credentials.id, request.payload);
          const response = await this._response( h, 'success',  { userId, }, `User berhasil ditambahkan dengan id`);
          response.code(201);
          return response;
        } 
        catch (error) {
          const response = await responseCatch(error, h);
          return response;
        }
      };
    
      async getBuruhKontakHandler(request, h) {
        try {
          const kontak = await this._service.getKontakBuruh(request.auth.credentials.id);
          const response = await this._response(h, 'success', { kontak });
          response.code(200);
          return response;      
        } 
        catch (error) {
          const response = await responseCatch(error, h);
          return response;
        }
      }
    
    
      async editBuruhKontakHandler(request, h) {
        try {
          await this._validator.Kontak(request.payload);
          await this._validator.KontakId(request.params);
          await this._dataChek.checkId('kontak', request.params.kontakId);
          const kontakId = await this._service.editBuruhKontak(request.params, request.auth.credentials.id, request.payload);
          const response = await this._response('Success', { kontakId, } , 'Data kontak berhasil diubah')
          response.code(201);
          return response;
        }
        catch (error) {
          const response = await responseCatch(error, h);
          return response;
        }
      }
    
      async deleteBuruhKontakHandler(request, h) {
        try {
          await this._validator.idKontak(request.params);
          await this._dataChek.checkId('kontak', request.params.kontakId);
          await this._service.deleteBuruhKontak(request.params);
          const response = await formatResponse('Success', undefined , 'Data kontak berhasil dihapus')
          response.code(201);
          return response;
        } 
        catch (error) {
          const response = await responseCatch(error, h);
          return response;
        }
      }

   


}

module.exports=Handler;