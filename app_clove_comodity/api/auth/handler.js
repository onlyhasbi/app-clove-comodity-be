const responseCatch = require('../../exception/responseHandlerCatch')
const autoBind = require('auto-bind');

class Handler {
  constructor(Service, tokenManager, validator) {
    this._authService = Service;
    this._tokenManager = tokenManager;
    this._validator = validator;
    this._response = ( h, status,  data, message ) => {
      const response = h.response({ status, message, data, });
      return response;
    }

    autoBind(this);
  }
 
  async postAuthenticationBuruh(request, h) {
    try {
      await this._validator.PostAuthPayload(request.payload);
      const id = await this._authService .verifyUserCredential("owner_user_buruh", request.payload);
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const refreshToken = await this._tokenManager.generateRefreshToken({ id });
      await this._authService.addRefreshToken(refreshToken);
      const response =  await this._response(h, 'success', { accessToken, refreshToken, },  `Authentication berhasil ditambahkan`);
      response.code(201);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async postAuthenticationAcc(request, h) {
    try {
      await this._validator.PostAuthPayload(request.payload);
      const id = await this._authService.verifyUserCredential("owner_user_acc", request.payload);
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const refreshToken = await this._tokenManager.generateRefreshToken({ id });
      await this._authService.addRefreshToken(refreshToken);
      const response =  await this._response(h, 'success', { accessToken, refreshToken, },  `Authentication berhasil ditambahkan`);
      response.code(201);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async putAuthentication(request, h) {
    try {
      this._validator.PutAuthPayload(request.payload);
      const { refreshToken } = request.payload;
      await this._authService.verifyRefreshToken(refreshToken);
      const { id } = await this._tokenManager.verifyRefreshToken(refreshToken); 
      const accessToken = await this._tokenManager.generateAccessToken({ id });
      const response =  await this._response(h, 'success', { accessToken, },  `Access Token berhasil diperbarui`);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }

  async deleteAuthentication(request, h) {
    try {
      this._validator.DeleteAuthPayload(request.payload);
      const { refreshToken } = request.payload;
      await this._authService.verifyRefreshToken(refreshToken);
      await this._authService.deleteRefreshToken(refreshToken);
      const response =  await this._response(h, 'success', undefined,  `Refresh token berhasil dihapus`);
      return response; 
    } 
    catch (error) {
      const response = await responseCatch(error, h); 
      return response;
    }
  }
}

module.exports = Handler;