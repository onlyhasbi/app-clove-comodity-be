const responseCatch = require('../../../../exception/responseHandlerCatch');
const autoBind = require ('auto-bind');



class Handler {
  constructor(service, validator) {
    this._service = service;
    this._validator =validator;
    this._response = (h, code, data, message) => {
      const response = h.response({ status: "success", message, data, });
      response.code(code);
      return response;
    }

    autoBind(this);
}

async getPanenHandler(request, h){
  try {
    const data = await this._service.getPanen(request.auth.credentials.id);  //akses  data akumulasi hasil pekerjaan(setoran) perlahan, peruser acc
    const response = await this._response(h, 200, data );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranHandler(request, h){
  try {
    const data = await this._service.getSetoran(request.auth.credentials.id);  //akses  data setoran keseluruhan
    const response = await this._response(h, 200, data );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getSetoranByLahanHandler(request, h){
  try {
    const data = await this._service.getSetoranByLahan(request.auth.credentials.id, request.params.lahanId);  //akses  data setoran lahan tertentu
    const response = await this._response(h, 200, data );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getPanenSelesaiHandler(request, h){
  try {
    const data = await this._service.getPanenSelesai(request.auth.credentials.id);  //akses  data setoran lahan tertentu
    const response = await this._response(h, 200, data );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async getPanenBelumSelesaiHandler(request, h){
  try {
    const data = await this._service.getPanenBelumSelesai(request.auth.credentials.id);  //akses  data setoran lahan tertentu
    const response = await this._response(h, 200, data );
    return response;      
  } 
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}



async setConplaintHandler(){
  try {
    await this._validator.komplain(request.payload);
    await this._service.verifyUser(request.auth.credentials.id, request.params.setoranId);
    const data = await this._service.updateConplaint(request.params.setoranId, request.payload);
    const response = await this._response(h, 201, data , 'update conplaint');
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}
async deleteConplaintHandler(){
  try {
    await this._service.verifyUser(request.auth.credentials.id, request.params.setoranId);
    const data = await this._service.deleteConplaint(request.params.setoranId);
    const response = await this._response(h, 201, data , 'delete conplaint');
    return response;
  }
  catch (error) {
    const response = await responseCatch(error, h);
    return response;
  }
}



}

  module.exports = Handler;