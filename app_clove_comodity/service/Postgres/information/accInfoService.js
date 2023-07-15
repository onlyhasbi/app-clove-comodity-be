const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr'); 


class setoranService {
    constructor() {
      this._pool = new Pool();
    }
  
    async getLamaran({}) {  // PAYLOAD [daerah:(arrayid_lokasi), jenisPekerjaan, upahMinimalPerV, upahMaksimal] 
    };
    async getBuruh({}) {   
    };
    async getRelasi({}) { // query [melamar, undangan, bekerja, ditolak, menolak]: value (boolean)
    };
    async getPenawaran({}) { // PAYLOAD[daerah:(arrayid_lokasi),jenisPenawaran:[penjualan, pembelian] massaMin & massaMaks, harga_min & harga_maks, jenisKomoditas]
    };
  
    
  }
  
  
  module.exports = setoranService;