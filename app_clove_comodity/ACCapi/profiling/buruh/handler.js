const NotFoundError = require('../../../exception/notFoundErr');
const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require('auto-bind');


class Handler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }
  async addBuruhKontakHandler(request, h) {
    try {
      print('error');
      await this._validator.validateBuruhKontakPayload(request.payload);

      const { ID_user } = request.params;
      const { jenis_kontak, kontak } = request.payload;

      const id_buruh = ID_user;
      const id_kontak = generateId(); // Assuming generateId() is defined elsewhere

      const kontakData = {
        id_buruh,
        id_kontak,
        jenis_kontak,
        kontak
      };
      await this._service.addBuruhKontak(kontakData);

      const response = h.response({
        status: 'success',
        message: `User berhasil ditambahkan dengan id ${ID_user}`,
        data: {
          id_buruh,
          id_kontak,
        },
      });
      response.code(201);
      return response;
    } catch (error) {
      console.error('Error in getUserHandler:', error);
      const response = await responseCatch(error, h);
      return response;
    }
  };

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

  async getBuruhKontakHandler(request, h) {
    try {
      const { ID_user } = request.params;
      const kontak = await this._service.getBuruhKontak(ID_user);

      const response = h.response({
        status: 'success',
        message: 'Terdaftar',
        data: { kontak },
      });
      response.code(200);
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

  async editBuruhKontakHandler(request, h) {
    try {
      const { ID } = request.params;
      await this._validator.validateBuruhKontakPayload(request.payload);

      const { jenis_kontak, kontak } = request.payload;

      const kontakData = {
        ID,
        jenis_kontak,
        kontak
      };

      await this._service.editBuruhKontak(kontakData);

      const response = h.response({
        status: 'berubah',
        message: 'Data kontak berhasil diubah',
        data: {
          ID_kontak: ID,
        },
      });
      response.code(201);
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