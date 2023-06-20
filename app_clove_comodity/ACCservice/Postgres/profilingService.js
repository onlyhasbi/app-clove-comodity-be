const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exception/invariantErr'); 


class profilingService {
    constructor(serviceCache) {
      this._pool = new Pool();
      this._serviceCache = serviceCache;
    }

//service add kontak untuk tabel kontak buruh dan acc     
    async addKontak( tabel , user ,{jenis_kontak, kontak}) {
      const id =`kontak-${nanoid(5)}`;      
      const query ={
        text :`INSERT INTO ${tabel} VALUES ($1, $2, $3, $4) RETURNING id`,
        values:[ id, user, jenis_kontak, kontak,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){
        throw new InvariantError('Kontak Pxp Gagal Ditambahkan');
      }
      return id;
    };

// service get kontak untuk tabel kontak buruh dan acc 
    async getUserAcc(tabel , user){
      const query = {
        text: `SELECT * FROM ${tabel} owner_user_acc WHERE owner_user = $1;`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) {
        throw new NotFoundError('kontak tidak ditemukan');
      }
      return result.rows[0];
    } 

//service update kontak untuk tabel kontak buruh dan acc     
    async updateKontak( tabel , id , {jenis_kontak, kontak}) {    
      const query ={
        text :`UPDATE ${tabel} SET jenis_kontak = $1, kontak= $4 WHERE id = $3 RETURNING id`,
        values:[jenis_kontak, kontak, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){
        throw new InvariantError('Kontak Pxp Gagal Ditambahkan');
      }
      return id;
    };

// service delete kontak untuk tabel kontak buruh dan acc 
    async deleteUserAcc(tabel , id){
      const query = {
        text: `DELETE FROM ${tabel} WHERE owner_user = $1;`,
        values: [id],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) {
        throw new NotFoundError('kontak tidak ditemukan');
      }
      return result.rows[0];
    }   
  
    async addLowonganKerja({jenis_pekerjaan, upah, indikator_upah, catatan}){
      const  id = `loker-${nanoid(5)}`;
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
  
  
  module.exports = profilingService;