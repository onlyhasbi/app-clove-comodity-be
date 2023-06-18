const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr'); 


class PxpProfilservice {
    constructor(serviceCache) {
      this._pool = new Pool();
      this._serviceCache = serviceCache;
    }
  
    async addKontakPxp({jenis_kontak, kontak}) {
      const id =`k_pxp-${nanoid(5)}`;
      const query ={
        text :`INSERT INTO kontak_pxp VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
        values:[id, jenis_kontak, kontak],
      };

      const result = await this._pool.query(query);

      if(!result.rows.length){
        throw new InvariantError('Kontak Pxp Gagal Ditambahkan');
      }
      return id;
    };
  
    async addLowonganKerja({jenis_pekerjaan, upah, indikator_upah, catatan}){
      const  id = `lowongan_k-${nanoid(5)}`;
      const query ={
        text:'INSERT INTO lowongan_kerja VALUES ($1, $2. $3, $4, $5, $6) RETURNING id',
        values:[id, jenis_pekerjaan, upah, indikator_upah, catatan],
      };
      const result = await this._pool.query(query);

      if(!result.rows.length){
        throw new InvariantError('lowongan kerja gagal ditambahkan');
      }
      return id;
    }

    async addPewaranKomoditi({
      jenis_penawaran,
      jenis_komoditas_cengkeh,
      max_nilai_ukur,
      min_nilai_ukur,
      indakator_ukur,
      harga_rp,
      catatan,         
    }){
      const id = `penawaran_k-${nanoid(5)}`;
      const query={
        text:`INSERT INTO penawaran_komoditi VALUES ($1, $2. $3, $4, $5, $6) RETURNING id'`,
        values:[
          id,
          jenis_penawaran,
          jenis_komoditas_cengkeh,
          max_nilai_ukur,
          min_nilai_ukur,
          indakator_ukur,
          harga_rp,
          catatan,    
        ],     
       };
    }
    
  }
  
  
  module.exports = setoranService;