const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exception/invariantErr');
const NotFoundError = require('../../exception/notFoundErr'); 

class profilingService {
  constructor(serviceCache) {
    this._pool = new Pool();
    this._serviceCache = serviceCache;
  }

//service kontak user buruh dan kontak user acc
  async checkKontak(tabel, user, jenis_kontak, kontak) {
    const result = await this._pool.query(`SELECT id FROM ${tabel} WHERE owner_user = '${user}' AND jenis_kontak='${jenis_kontak}' AND kontak= '${kontak}';`);
    if (result.rows.length === 0) {  return ;}
    throw new InvariantError('sudah ada data kontak dengan nilai yang sama.');
  }    
  async addKontak( tabel, user, {jenis_kontak, kontak}) {
    await this.checkKontak(tabel , user , jenis_kontak, kontak);
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
  }
  async getKontak(tabel, user){
    const query = {
      text: `SELECT id, jenis_kontak, kontak komm FROM ${tabel} WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) { throw new NotFoundError('kontak tidak ditemukan');}
    const owner_user = user;
    const jumlah_kontak =result.rows.length;
    const kontak = result.rows;
    return {owner_user, jumlah_kontak, kontak};
  }    
  async updateKontak(tabel, user, id, {jenis_kontak, kontak}) {
    await this.checkKontak(tabel , user , jenis_kontak, kontak);
    const query ={
      text :`UPDATE ${tabel} SET jenis_kontak = $1, kontak= $2 WHERE id = $3 RETURNING id`,
      values:[jenis_kontak, kontak, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('Kontak Pxp Gagal Ditambahkan');
    }
    return id;
  }
  async deleteKontak(tabel, id){
    const query = {
      text: `DELETE FROM ${tabel} WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('kontak tidak ditemukan');
    }
    return id;
  }   

  
//service lamaran buruh
  async checkLamaran(user, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan) {
    const query = {
      text: `SELECT id FROM lamaran_kerja WHERE owner_user=$1 AND jenis_pekerjaan=$2 AND upah_harapan_rp=$3 AND indikator_ukur=$4 AND catatan=$5;`,
      values: [user, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan],
    };
    const result = await this._pool.query(query);
    if (result.rows.length === 0) {  return ;}
    throw new InvariantError('sudah ada data lamaran dengan nilai yang sama.');
  }    
  async addLamaran( user, {jenis_pekerjaan, upah_harapan, indikator_ukur, catatan}) {
    await this.checkLamaran(user, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan);
    const id =`lamaran-${nanoid(5)}`;      
    const query ={
      text :`INSERT INTO lamaran_kerja VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      values:[ id, user, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan, 1],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal menambah data lamaran');
    }
    return id;
  }
  async getLamaran(user){
    const query = {
      text: `SELECT id, jenis_pekerjaan, upah_harapan_rp, indikator_ukur, catatan, status_aktif FROM lamaran_kerja WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('gagal mendapatkan data lamaran');}
    const owner_user = user;
    const jumlah_lamaran =result.rows.length;
    const lamaran = result.rows;
    return {owner_user, jumlah_lamaran, lamaran};
  }    
  async updateLamaran(user, id, {jenis_pekerjaan, upah_harapan, indikator_ukur, catatan}) {
    await this.checkLamaran(user, jenis_pekerjaan, upah_harapan, indikator_ukur, catatan);
    const query ={
      text :`UPDATE lamaran_kerja SET jenis_pekerjaan=$1, upah_harapan_rp=$2, indikator_ukur=$3, catatan=$4 WHERE id = $5 RETURNING id;`,
      values:[jenis_pekerjaan, upah_harapan, indikator_ukur, catatan, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal merubah data lamaran');
    }
    return id;
  }
  async deleteLamaran(id){
    const query = {
      text: `DELETE FROM lamaran_kerja WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('gagal menghapus data lamaran');
    }
    return id;
  }   


 //service lowongan kerja/job reqruiment acc
  async checkLowongan(user, jenis_pekerjaan, upah_rp, indikator_ukur, catatan) {
    const query = {
      text: `SELECT id FROM lowongan_kerja WHERE owner_user=$1 AND jenis_pekerjaan=$2 AND upah_rp=$3 AND indikator_ukur=$4 AND catatan=$5;`,
      values: [user, jenis_pekerjaan, upah_rp, indikator_ukur, catatan],
    };
    const result = await this._pool.query(query);
    if (result.rows.length === 0) {  return ;}
    throw new InvariantError('sudah ada data lowongan dengan nilai yang sama.');
  }    
  async addLowongan( user, {jenis_pekerjaan, upah_rp, indikator_ukur, catatan}) {
    await this.checkLowongan(user, jenis_pekerjaan, upah_rp, indikator_ukur, catatan);
    const id =`lamaran-${nanoid(5)}`;      
    const query ={
      text :`INSERT INTO lowongan_kerja VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id`,
      values:[ id, user, jenis_pekerjaan, upah_rp, indikator_ukur, catatan, 1 , 0, ],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal menambah data lowongan');
    }
    return id;
  }
  async getLowongan(user){
    const query = {
      text: `SELECT id, jenis_pekerjaan, upah_rp, indikator_ukur, catatan, status_lowongan , status_referensi FROM lowongan_kerja WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('gagal mendapatkan data lowongan');}
    const owner_user = user;
    const jumlah_lowongan =result.rows.length;
    const lowongan = result.rows;
    return {owner_user, jumlah_lowongan, lowongan};
  }    
  async updateLowongan(user, id, {jenis_pekerjaan, upah_rp, indikator_ukur, catatan}) {
    await this.checkLowongan(user, jenis_pekerjaan, upah_rp, indikator_ukur, catatan);
    const query ={
      text :`UPDATE lowongan_kerja SET jenis_pekerjaan=$1, upah_rp=$2, indikator_ukur=$3, catatan=$4 WHERE id = $5 RETURNING id;`,
      values:[jenis_pekerjaan, upah_rp, indikator_ukur, catatan, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal merubah data lowongan');
    }
    return id;
  }
  async deleteLowongan(id){
    const query = {
      text: `DELETE FROM lowongan_kerja WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('gagal menghapus data lowongan');
    }
    return id;
  }


//service penawaran komoditas
  async checkPenawaran(user, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan) {
    const query = {
      text: `SELECT id FROM penawaran_komoditas WHERE owner_user=$1 AND jenis_penawaran=$2 AND jenis_komoditas=$3 AND max=$4 AND min=$5 AND satuan=$6 AND harga_rp=$7 AND catatan=$8;`,
      values: [user, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan],
    };
    const result = await this._pool.query(query);
    if (result.rows.length === 0) {  return ;}
    throw new InvariantError('sudah ada data penawaran dengan nilai yang sama.');
  }    
  async addPenawaran( user, {jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan}) {
    await this.checkPenawaran(user, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan);
    console.log('as')
    const id =`penawaran-${nanoid(5)}`;      
    const query ={
      text :`INSERT INTO penawaran_komoditas VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
      values:[ id, user, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan, 1],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal menambah data penawaran');
    }
    return id;
  }
  async getPenawaran(user){
    const query = {
      text: `SELECT id, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan, status_penawaran FROM penawaran_komoditas WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('gagal mendapatkan data lamaran');}
    const owner_user = user;
    const jumlah_lamaran =result.rows.length;
    const lamaran = result.rows;
    return {owner_user, jumlah_lamaran, lamaran};
  }    
  async updatePenawaran(user, id, {jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan}) {
    await this.checkPenawaran(user, jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan);
    const query ={
      text :`UPDATE penawaran_komoditas SET jenis_penawaran=$1, jenis_komoditas=$2, max=$3, min=$4, satuan=$5, harga_rp=$6, catatan=$7 WHERE id = $8 RETURNING id;`,
      values:[jenis_penawaran, jenis_komoditas, max, min, satuan, harga_rp, catatan, id],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError('gagal merubah data penawaran');
    }
    return id;
  }
  async deletePenawaran(id){
    const query = {
      text: `DELETE FROM penawaran_komoditas WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError('gagal menghapus data penawaran');
    }
    return;
  }   


//service penawaran komoditas
  async updateStatus(tabel, field,  id, {status}) {
    const query ={
      text :`UPDATE ${tabel} SET ${field}=$1  WHERE id = $2 RETURNING id, ${field} ;`,
      values:[status, id],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){
      throw new InvariantError(`gagal merubah data ${field} pada tabel ${tabel}`);
    }
    return result.rows[0];
  }
}
  
  
  module.exports = profilingService;