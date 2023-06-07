const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(authenticationsService, verify, tokenManager, validator) {
    this._authenticationsService = authenticationsService;
    this._verify = verify;
    this._tokenManager = tokenManager;
    this._validator = validator;

    autoBind(this);
  }
 
  async postAuth(request, h) {
    try {
      await this._validator.PostAuthPayload(request.payload);
      const { username, password } = request.payload;
      const id = await this._verify.UserCredential(username, password);
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const refreshToken = await this._tokenManager.generateRefreshToken({ id });
 
      await this._authenticationsService.addRefreshToken(refreshToken);
 
      const response = h.response({
        status: 'success',
        message: 'Authentication berhasil ditambahkan',
        data: {
          accessToken,
          refreshToken,
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

  async putAuth(request, h) {
    try {
      this._validator.PutAuthPayload(request.payload);
      const { refreshToken } = request.payload;
      await this._authenticationsService.verifyRefreshToken(refreshToken);
      const { id } = this._tokenManager.verifyRefreshToken(refreshToken); 
      const accessToken = this._tokenManager.generateAccessToken({ id });
      return {
        status: 'success',
        message: 'Access Token berhasil diperbarui',
        data: {
          accessToken,
        },
      }; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async deleteAuth(request, h) {
    try {
      this._validator.validateDeleteAuthenticationPayload(request.payload);
      const { refreshToken } = request.payload;
      await this._authenticationsService.verifyRefreshToken(refreshToken);
      await this._authenticationsService.deleteRefreshToken(refreshToken);
 
      return {
        status: 'success',
        message: 'Refresh token berhasil dihapus',
      };
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

module.exports = Handler;