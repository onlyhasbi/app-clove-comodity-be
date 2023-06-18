const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr'); 
const NotFoundError = require('../../../exception/notFoundErr');


class BuruhProfilService {
    constructor(serviceCache) {
      this._pool = new Pool();
      this._serviceCache= serviceCache;
    }

    async addKontakBuruh({jenis_kontak, kontak}){
      const id = `k_buruh-${nanoid(5)}`; 
      const query ={
        text :`INSERT INTO kontak_buruh VALUES ($1, $2, $3) RETURNING id`,
        values:[id, jenis_kontak, kontak],
      };

      const result= await this._pool.query(query);

      if(!result.rows.length){
        throw new InvariantError('kontak buruh gagal ditambahkan');
      }
      return id;
    } 

  async addLamaranTerbuka({jenis_pekerjaan, indikator_ukur, catatan}){
    const id= `Lamaran_T-${nanoid(5)}`;
    const query={
      text :`INSERT INTO lamaran_terbuka VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      values:[id, jenis_pekerjaan, indikator_ukur, catatan],
    };

    const result = await this._pool.query(query);

    if(!result.rows.length){
      throw new InvariantError('lamaran gagal di tambahkan')
    }
    return id;
  }

   async getAllKontakBuruh(){
    const result = await this._pool.query('SELECT id, id_buruh, jenis_kontak, kontak FROM kontak_buruh');
    if (!result.rows.length){
      throw new NotFoundError('Kontak Tidak Ditemukan');
    }
    return result.rows;
  }

  async getAllLamaranTerbuka(){
    const result = await this._pool.query('SELECT id, id_buruh, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan');
    if(!result.rows.length){
      throw new NotFoundError ('catatan lamaran tidak ditemukan')
    }
    return result.rows;
  }

  async updateKontakBuruh({ jenis_kontak, kotak }){
    const query ={
      text:'UPDATE kontak_buruh SET jenis_kontak =($1), kontak=($2),  WHERE id = ($3) RETURNING id,  jenis_kontak, kontak',
      values:[jenis_kontak, kotak]
    }
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new NotFoundError('kontak tidak ditemukam')
    }
    await this._serviceCache.delete('kontak_buruh');
    return result.rows[0];
  }
  async updateLamaranTerbuka({ jenis_pekerjaan, indikator_ukur, catatan }){
    const query ={
      text:'UPDATE lamran_terbuka SET jenis_kontak =($1), kontak=($2),  WHERE id = ($3) RETURNING id,  jenis_kontak, kontak',
      values:[jenis_pekerjaan, indikator_ukur, catatan]
    }
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new NotFoundError('kontak tidak ditemukam')
    }
    await this._serviceCache.delete('kontak_buruh');
    return result.rows[0];
  }

  async deleteKontakBuruh(id){
    const query ={
      text :'DELETE FROM kontak_buruh WHERE id = $1 RETURNING id',
      values:[id],
    }
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new NotFoundError('Lagu gagal dihapus.Id tidak ditemukan')
    }

    await this._serviceCache.delete('kontak_buruh');
    return result.rows[0].id;
  }

  async deleteLamaranTerbuka(id){
    const query={
      text:'DELETE  FROM lamaran_terbuka WHERE id = $1 RETURNING id',
      values:[id]
    }
    const  result = await this._pool.query(query);
    if (!result.rows.length){
      throw new NotFoundError('Lamaran gagal di hapus. Id tidak ditemukan');
    }

    await this._serviceCache.delete('id');
    return result.rows[0].id;
  }
  }
  
  
  module.exports = BuruhProfilService;
