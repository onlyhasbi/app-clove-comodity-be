const responseCatch = require('../../../exception/responHandlerCatch')
const NotFoundError = require('../../../exception/notFoundErr');
const autoBind = require ('auto-bind')

class Handler {
    constructor(service, validator) {
        this._service = service;
        this._validator =validator;

        autoBind(this);
    }

   

    async addKontakPxpHandler(request,h) {
        try{
            await this._validator.validateKontokPxpPayload(request.payload);

            const { ID_user}= request.params;
            const {jenis_kontak, kontak}= request.payload;

            const id_kontak =generateId();

            const kontakData = {
                id_user:ID_user,
                id_kontak,
                jenis_kontak,
                kontak,
            };
            await this._service.addKontakPxp(kontakData);

            const response =h.response({
                status:'success',
                message:`Kontak berhasil ditambahkan dengan ID${id_kontak}`,
                data:{
                    id_kontak,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch ( error,h);
            return response;
        }
    }
    async addLowonganKerjaHandler(request,h) {
        try{
            await this._validator.validateLowonganKerjaPayload(request.payload);

            const { ID_user}= request.params;
            const {jenis_pekerjaan, upah, indikator_upah, catatan}= request.payload

            const id_lowongan =generateId();

            const lowonganData = {
                id_user:ID_user,
                id_lowongan,
                jenis_pekerjaan,
                upah,
                indkator_upah,
                catatan,
            };
            await this._service.addLowonganKerja(lowonganData);

            const response =h.response({
                status:'success',
                message:`Lowongan kerja berhasil ditambahkan dengan ID${id_lowongan}`,
                data:{
                    id_lowongan,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch ( error,h) 
            return response;
        }
    }
    async addPenawaranKomoditiHandler(request,h) {
        try{
            await this._validator.validatePenawaranKomoditiPayload(request.payload);

            const { ID_user}= request.params;
            const {
                jenis_penawaran,
                jenis_komoditas_cengkeh,
                max_nilai_ukur,
                min_nilai_ukur,
                indakator_ukur,
                harga_rp,
                catatan,
            }= request.payload

            const id_penawaran =generateId();

            const penawaranData = {
                id_user:ID_user,
                id_penawaran,
                jenis_penawaran,
                jenis_komoditas_cengkeh,
                max_nilai_ukur,
                min_nilai_ukur,
                indakator_ukur,
                harga_rp,
                catatan,
            };
            await this._service.addPenawaranKomoditi(penawaranData);

            const response =h.response({
                status:'success',
                message:`penawaran komodidti berhasil ditambahkan dengan ID${id_penawaran}`,
                data:{
                    id_kontak,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch ( error,h) 
            return response;
        }
    }

    async getKontakPxpHandler(request,h){
        try {
            const  { ID_user }= request.params;
            const kontak = await this._service.getKontakPxp(ID_user);

            const response = h.response({
                status:'success',
                message:'kontak terdaftar',
                data:{ kontak },
            });
            response.cod(200);
            return response;
        }catch(error){
            const response = await responseCatch(error, h);
            return response
        }
    }
    async getLowonganKerjaHandler(request,h){
        try {
            const  { ID_user }= request.params;
            const lowongan = await this._service.getLowonganKerja(ID_user);

            const response = h.response({
                status:'success',
                message:'Lowongan kerja terdaftar',
                data:{ lowongan },
            });
            response.cod(200);
            return response;
        }catch(error){
            const response = await responseCatch(error, h);
            return response
        }
    }
    async getPenawaranKomoditiHandler(request,h){
        try {
            const  { ID_user }= request.params;
            const penawaran = await this._service.getPenawaranKomoditi(ID_user);

            const response = h.response({
                status:'success',
                message:'penawaran komoditi  terdaftar',
                data:{ penawaran },
            });
            response.cod(200);
            return response;
        }catch(error){
            const response = await responseCatch(error, h);
            return response
        }
    }

    async editKontakPxpHandler(request,h){
        try{
            const { ID } =request.params;
            await this._validator.validateKontokPxpPayload(request.payload);

            const { jenis_kontak, kontak }= request.payload;

            const kontakData = {
                ID,
                jenis_kontak,
                kontak,
            };
            await this._service.editKontakPxp(kontakData);

            const response = h.response({
                status:'berubah',
                message:'Data kontak berhasil diubah',
                data:{
                    ID_kontak:ID,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch(error,h);
            return response;
        }
    }
    async editLowonganKerjaHandler(request,h){
        try{
            const { ID } =request.params;
            await this._validator.validateLowonganKerjaPayload(request.payload);

            const { jenis_pekerjaan, upah, indakator_upah, catatan }= request.payload;

            const lowonganData = {
                ID,
                jenis_pekerjaan,
                upah,
                indakator_upah,
                catatan,
            };
            await this._service.editLowonganKerja(lowonganData);

            const response = h.response({
                status:'berubah',
                message:'Data lowongan kerja berhasil diubah',
                data:{
                    ID_lowongan:ID,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch(error,h);
            return response;
        }
    }
    async editPenawaranKomoditiHandler(request,h){
        try{
            const { ID } =request.params;
            await this._validator.validatePenawaranKomoditiPayload(request.payload);

            const { jenis_komoditi, jumlah, harga, catatan }= request.payload;

            const penawaranData = {
                ID,
                jenis_komoditi,
                jumlah,
                harga,
                catatan,

            };
            await this._service.editPenawaranKomoditi(penawaranData);

            const response = h.response({
                status:'berubah',
                message:'Data penawaran komoditi  berhasil diubah',
                data:{
                    ID_penawaran:ID,
                },
            });
            response.code(201);
            return response;
        }catch (error){
            const response = await responseCatch(error,h);
            return response;
        }
    }

    async deleteKontakPxpHandler(request,h){
        try{
            const { ID }= request.params;

            const index= this._service.deleteKontak(ID);

            if (index === -1) {
                throw NotFoundError ('Data tidak ditemukan');
            }

            const response= h.response({
                status:'terhapus',
                message:'Data kontak berhasil di hapus',
            });
            response.code(200);
            return response;
        }catch (error){
            const response = await responseCatch(error, h);
        }
    }
    async deleteLowonganKerjaHandler(request,h){
        try{
            const { ID }= request.params;

            const index = this._service.deleteLowonganKerja(ID);

            if(index===-1){
                throw NotFoundError('Data lowongan kerja ditemukan');
            }

            const response = h.response({
                status:'terhapus',
                message:'Data lowongan kerja berhasil di hapus',
            });
            response.code(200);
            return response;
        }catch (error){
            const response = await responseCatch(error,h)
            return response;
        }
    }

    async deletePenawaranKomoditiHandler(request,h){
        try {
            const{ ID} = request.params;

            const index = await this._service.deletePenawaranKomoditi(ID);

            if(index===-1){
                throw NotFoundError ('Data penawaran komoditi tidak ditemukan')
            }

            const response =h.response({
                status:'terhapus',
                message:'Data penawaran komoditi berhasil dihapus',
            });

            response.code(200);
            return response;
        }catch(error){
            const response= await responseCatch(error,h);
            return response
            
        }
      
    }
}

module.exports=Handler;