const NotFoundError = require('../../../exception/notFoundErr');
const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require('auto-bind');


class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator = validator;
    this._response = ( h, status, message, data ) => {
                        const response = h.response({ status, message, data, });
                        return response;
                      }

    autoBind(this);
  }


  async addBuruhKontakHandler(request, h) {
    try {
      await this._validator.validateBuruhKontakPayload(request.payload);
      const userId = await this._service.addKontakBuruh(request.auth.credentials.id, request.payload);

      const response =  this._response( h, 'success', `User berhasil ditambahkan dengan id`,  { userId});
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

      const response =  formatResponse(h, 'success', { kontak });
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
      await this._validator.updateKontakBuruh(request.payload);
      await this._validator.idKontak(request.params);
      await this._dataChek.checkId('kontak', request.params.kontakId);
      const kontakId = await this._service.editBuruhKontak(request.params, request.auth.credentials.id, request.payload);

      const response = await formatResponse('Success', 'Data kontak berhasil diubah', kontakId)
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
      const { ID } = request.params;

      const index = this._service.deleteBuruhKontak(ID);

      if (index === -1) {
        throw new NotFoundError('Data kontak tidak ditemukan');
      }

      const response = h.response({
        status: 'terhapus',
        message: 'Data kontak berhasil dihapus',
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

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
      const { ID_user } = request.params;
      const lamaran = await this._service.getLamaranTerbuka(ID_user);

      const response = h.response({
        status: 'success',
        message: 'Terdaftar',
        data: { lamaran },
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async editLamaranTerbukaHandler(request, h) {
    try {
      const { ID } = request.params;
      await this._validator.validateLamaranTerbukaPayload(request.payload);

      const { jenis_pekerjaan, upah_harapan, indikator_upah, catatan } = request.payload;

      const lamaranData = {
        ID,
        jenis_pekerjaan,
        upah_harapan,
        indikator_upah,
        catatan,
      };
      await this._service.editLamaranTerbuka(lamaranData);

      const response = h.response({
        status: 'berubah',
        message: 'Data permintaan komoditi berhasil diubah',
        data: {
          id_permintaan: ID,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }

  async deleteLamaranTerbukaHandler(request, h) {
    try {
      const { ID } = request.params;

      const index = await this._service.deleteLamaranTerbuka(ID);

      if (index === -1) {
        throw new NotFoundError('Data permintaan komoditi tidak ditemukan');
      }

      const response = h.response({
        status: 'terhapus',
        message: 'Data permintaan komoditi berhasil dihapus',
      });
      response.code(200);
      return response;
    } catch (error) {
      const response = await responseCatch(error, h);
      return response;
     }
  }
  
}

module.exports = Handler;