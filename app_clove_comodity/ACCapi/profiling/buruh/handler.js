const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require('auto-bind');


class Handler {
  constructor(service, validator , author) {
    this._service = service;
    this._validator = validator;
    this._author = author;
    this._response = ( h, status, data, message) => {
                        const response = h.response({ status, message, data, });
                        return response;
                      }

    autoBind(this);
    
  }
// handler kontak buruh 
  
  async addKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      const userId = await this._service.addKontak(`kontak_buruh`, request.auth.credentials.id, request.payload);
      const response = await this._response( h, 'success',  { userId, }, `kontak di tambahkan`);
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  };

  async getKontakHandler(request, h) {
    try {
      const kontak = await this._service.getKontak(`kontak_buruh` , request.auth.credentials.id);
      const response = await this._response(h, 'success', { kontak });
      response.code(200);
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }


  async editKontakHandler(request, h) {
    try {
      await this._validator.kontak(request.payload);
      console.log(request.payload)
      await this._author.verifyUser(request.auth.credentials.id,`kontak_buruh` , request.params.kontakId)
      const kontakId = await this._service.updateKontak(`kontak_buruh` , request.auth.credentials.id, request.params.kontakId, request.payload);
      const response = await this._response(h, 'Success', { kontakId, } , 'Data kontak berhasil diubah')
      response.code(201);
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteKontakHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`kontak_buruh` , request.params.kontakId)
      await this._service.deleteKontak(`kontak_buruh` , request.params.kontakId);
      const response = await this._response(h, 'Success', undefined , 'Data kontak berhasil dihapus')
      response.code(201);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
 //handler lamaran buruh 

  async addLamaranTerbukaHandler(request, h) {
    try {
      await this._validator.validateLamaranTerbukaPayload(request.payload);

      const { ID_user } = request.params;
      const { jenis_pekerjaan, upah_harapan, indikator_upah, catatan } = request.payload;

      const id_permintaan = generateId(); // Assuming generateId() is defined elsewhere

      const lamaranData = {
        id_user: ID_user,
        jenis_pekerjaan,
        upah_harapan,
        indikator_upah,
        catatan,
      };
      await this._service.addLamaranTerbuka(lamaranData);

      const response = h.response({
        status: 'success',
        message: 'Lamaran berhasil ditambahkan',
        data: {
          id_permintaan,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async getLamaranTerbukaHandler(request, h) {
    try {
      const kontak = await this._service.getLamaranTerbuka(request.auth.credentials.id);
      const response = await this._response(h, 'success', { kontak });
      response.code(200);
      return response; 
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async editLamaranTerbukaHandler(request, h) {
    try {
      await this._validator.updateLamaranTerbuka(request.payload);
      await this._validator.idLamaranTerbuka(request.params);
      await this._dataChek.checkId('kontak', request.params.kontakId);
      const kontakId = await this._service.editLamaranTerbuka(request.params, request.auth.credentials.id, request.payload);
      const response = await this._response('Success', { kontakId, } , 'Data kontak berhasil diubah')
      response.code(201);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteLamaranTerbukaHandler(request, h) {
    try {
      const index = this._service.deleteBuruhKontak(ID);
      const response = await this._esponse('Success', undefined , 'Data kontak berhasil dihapus')
      response.code(201);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
}

module.exports = Handler;