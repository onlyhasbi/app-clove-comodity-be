
class testHandler {

  async test(request, h) {
    try {
      let siapa = "sembarangmo"
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

 
      // Server ERROR!
      const response = h.response({
        status: 'fail',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(400);
      return response;
    }
  }

 
}

  module.exports = testHandler;