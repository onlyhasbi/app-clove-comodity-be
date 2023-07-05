const responseCatch = require('../../../exception/responHandlerCatch');
const autoBind = require ('auto-bind');



class Handler {
  constructor(service, validator, author) {
    this._service = service;
    this._validator =validator;
    this._author = author;
    this._response = (h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }

    autoBind(this);
}





//handler lahan 
  async addLahanHandler(request, h) {
    try {
      await this._validator.lahan(request.payload);
      const lahanId = await this._service.addLahan(request.auth.credentials.id, request.payload);
      const response = await this._response( h, 201,  { lahanId, }, `Lahan berhasil ditambahkan`);
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async getLahanHandler(request, h) {
    try {
      const lahan = await this._service.getLahan(request.auth.credentials.id);
      const response = await this._response(h, 200, lahan );
      return response;      
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async editLahanHandler(request, h) {
    try {
      await this._validator.lahan(request.payload);
      await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId);
      const lahanId = await this._service.updateLahan(  request.auth.credentials.id, request.params.lahanId, request.payload);
      const response = await this._response(h, 201, { lahanId, } , 'Data lahan berhasil diubah');
      return response;
    }
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }
  async deleteLahanHandler(request, h) {
    try {
      await this._author.verifyUser(request.auth.credentials.id,`lahan` , request.params.lahanId);
      await this._service.deleteLahan(request.params.lahanId);
      const response = await this._response(h, 201, undefined , 'Data lahan berhasil dihapus');
      return response;
    } 
    catch (error) {
      const response = await responseCatch(error, h);
      return response;
    }
  }




//user menambahkan data hasil panen 
async addHasilPanenHandler(request, h) {
  try {
    await this._validator.hasilPanen(request.payload);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.payload.id_lahan);
    const hasilPanenId = await this._service.addHasilPanen(request.payload);
    const response = await this._response( h, 201,  { hasilPanenId, }, `Lahan berhasil ditambahkan`);
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getHasilPanenHandler(request, h) {
  try {
    const hasilPanen = await this._service.getHasilPanen(request.auth.credentials.id);
    const response = await this._response(h, 200, hasilPanen );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getHasilPanenByLahanHandler(request, h) {
  try {
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId);
    const hasilPanen = await this._service.getHasilPanenByLahan(request.params.lahanId);
    const response = await this._response(h, 200, hasilPanen );
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async editHasilPanenHandler(request, h) {
  try {
    await this._validator.hasilPanen(request.payload);
    const id_lahan = await this._service.chekLahanHasilPanen(request.params.hasilPanenId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.payload.id_lahan);
    const hasilPanenId = await this._service.updateHasilPanen(request.params.hasilPanenId, request.payload);
    const response = await this._response(h, 201, { hasilPanenId } , 'Data lahan berhasil diubah');
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async deleteHasilPanenHandler(request, h) {
  try {
    const id_lahan = await this._service.chekLahanHasilPanen(request.params.hasilPanenId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    await this._service.deleteHasilPanen(request.params.hasilPanenId);
    const response = await this._response(h, 201, undefined , 'Data lahan berhasil dihapus');
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}


//user menambahkan data setoran 
async addSetoranHandler(request, h) {
  try {
    await this._validator.setoran(request.payload);
    const id_lahan = await this._service.chekLahanHasilPanen(request.payload.id_hasil_panen);
    const id_buruh = await this._service.chekBuruh(request.payload.id_buruh);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    const setoranId = await this._service.addSetoran(request.payload);
    const response = await this._response( h, 201,  {setoranId}, `setoran berhasil ditambahkan`);
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranHandler(request, h) {
  try {
    const hasilPanen = await this._service.getSetoran(request.auth.credentials.id);
    const response = await this._response(h, 200, hasilPanen );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranByLahanHandler(request, h) {
  try {
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId);
    const hasilPanen = await this._service.getSetoranByLahan(request.params.lahanId);
    const response = await this._response(h, 200, hasilPanen );
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranByHasilPanenHandler(request, h) {
  try {
    const id_lahan = await this._service.chekLahanHasilPanen(request.params.hasilPanenId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    const hasilPanen = await this._service.getSetoranByHasilPanen(request.params.hasilPanenId);
    const response = await this._response(h, 200, hasilPanen );
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async editSetoranHandler(request, h) {
  try {
    await this._validator.setoran(request.payload);
    const id_hasil_panen = await this._service.chekSetoranHasilPanen(request.params.setoranId);
    const id_lahan = await this._service.chekLahanHasilPanen(id_hasil_panen);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    const lahanId = await this._service.updateSetoran(request.params.setoranId, request.payload);
    const response = await this._response(h, 201, { lahanId } , 'Data lahan berhasil diubah');
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}

async setSetoranPadaHasilPanenHandler() {};
async setStatusPembayaranSetoranHandler() {};
async deleteSetoranHandler(request, h) {
  try {
    const id_hasil_panen = await this._service.chekSetoranHasilPanen(request.params.setoranId);
    const id_lahan = await this._service.chekLahanHasilPanen(id_hasil_panen);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    await this._service.deleteSetoran(request.params.setoranId);
    const response = await this._response(h, 201, undefined , 'Data lahan berhasil dihapus');
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
}

  module.exports = Handler;