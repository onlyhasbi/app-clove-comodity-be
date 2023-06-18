const responseCatch = require('../../../../exception/responHandlerCatch')
const InvariantError = require('../../../../exception/invariantErr')
const notFoundError = require('../../../../exception/notFoundErr')


class Handler {

  async postHasilbyUser(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getHasilbyUser(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getHasilbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getHasil(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async putHasilbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteHasilbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
}

  module.exports = Handler;