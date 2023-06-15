const responseCatch = require('../../../../exception/responHandlerCatch')
const InvariantError = require('../../../../exception/invariantErr')
const notFoundError = require('../../../../exception/notFoundErr')


class Handler {

  async postBahanbyUser(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getBahanbyUser(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getBahanbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

  async getBahan(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async putBahanbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }
  async deleteBahanbyId(request, h) {
    try {
    } 
    catch (error ) { 
      const response = await responseCatch(error, h); 
      return response;
     }
  }

}

  module.exports = Handler;