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
    const hasilPanenId = await this._service.addHasilPanenHandler(request.payload);
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
    await validator.lahanId(request.lahanId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId);
    const hasilPanen = await this._service.getHasilPanen(request.params.lahanId);
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
    const lahanId = await this._service.updateHasilPanen(request.params.hasilPanenId, request.payload);
    const response = await this._response(h, 201, { lahanId } , 'Data lahan berhasil diubah');
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
    await this._service.deleteLahan(request.params.lahanId);
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
    const id_lahan = await this._service.chekLahanHasilPanen(request.params.payload.id_hasil_panen);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    const setoranId = await this._service.addSetoranHandler(request.payload);
    const response = await this._response( h, 201,  {setoranId}, `Lahan berhasil ditambahkan`);
    return response;
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranHandler(request, h) {
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
async getSetoranByLahanHandler(request, h) {
  try {
    await validator.lahanId(request.lahanId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.params.lahanId);
    const hasilPanen = await this._service.getSetoran(request.params.lahanId);
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
    await validator.lahanId(request.lahanId);
    const id_lahan = await this._service.chekLahanHasilPanen(request.params.hasilPanenId);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    const hasilPanen = await this._service.getSetoran(request.params.hasilPanenId);
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
    const id_hasil_panen = await this._service.chekLahanHasilPanen(request.params.setoranId);
    const id_lahan = await this._service.chekLahanHasilPanen(id_hasil_panen);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , request.payload.id_lahan);
    const lahanId = await this._service.updateHasilPanen(request.params.setoranId, request.payload);
    const response = await this._response(h, 201, { lahanId } , 'Data lahan berhasil diubah');
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async deleteSetoranHandler(request, h) {
  try {
    const id_hasil_panen = await this._service.chekLahanHasilPanen(request.params.setoranId);
    const id_lahan = await this._service.chekLahanHasilPanen(id_hasil_panen);
    await this._author.verifyUser(request.auth.credentials.id, `lahan` , id_lahan);
    await this._service.deleteLahan(request.params.setoranId);
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