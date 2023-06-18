const responseCatch = require('../../exception/responHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(Service, tokenManager, validator) {
    this._authService = Service;
    this._tokenManager = tokenManager;
    this._validator = validator;

    autoBind(this);
  }
 
  async postAuthB(request, h) {
    try {
      console.log(this._authService , this._validator, this._tokenManager)
      await this._validator.PostAuthPayload(request.payload);
      const id = await this._authService .verifyUserCredential("buruh", request.payload);
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const refreshToken = await this._tokenManager.generateRefreshToken({ id });
      await this._authService.addRefreshToken(refreshToken);
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

  async postAuthPxP(request, h) {
    try {
      await this._validator.PostAuthPayload(request.payload);
      const id = await this._authService.verifyUserCredential("pxp", request.payload);
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const refreshToken = await this._tokenManager.generateRefreshToken({ id });
      await this._authService.addRefreshToken(refreshToken);
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
      await this._authService.verifyRefreshToken(refreshToken);
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
      this._validator.DeleteAuthPayload(request.payload);
      const { refreshToken } = request.payload;
      await this._authService.verifyRefreshToken(refreshToken);
      await this._authService.deleteRefreshToken(refreshToken);
 
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