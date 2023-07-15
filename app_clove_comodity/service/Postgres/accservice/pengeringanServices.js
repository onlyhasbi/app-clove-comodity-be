const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr');
const NotFoundError = require('../../../exception/notFoundErr'); 


class pengeringanService {
  constructor() {
    this._pool = new Pool();
  }
  
//SERVICE SETORAN    
async checkTim(user, nama_tim) {
  const result = await this._pool.query(`SELECT id FROM tim_pengeringan WHERE owner_user = '${user}' AND nama_tim = '${nama_tim}';`);
  if (result.rows.length === 0) {  return ;}
  throw new InvariantError('nama lahan sudah anda gunakan untuk lahan lain, gunakan nama baru untuk menambahkan atau edit lahan yang sudah ada');
};
async checkTimUpdate(user, id, nama_tim) {
  const result = await this._pool.query(`SELECT id FROM tim_pengeringan WHERE owner_user = '${user}' AND nama_tim = '${nama_tim}';`);
  if (result.rows.length === 0 || result.rows[0].id === id ) {return ;}
  throw new NotFoundError('nama lahan sudah digunakan untuk lahan lain'); 
};
////SERVICE CRUD SETORAN
async addTim(user, {nama_tim, ketua_tim }) {
  await this.checkTim(user, nama_tim);
  const id = `lahan-${nanoid(7)}`;
  const query = {
    text: ` INSERT INTO tim_pengeringan VALUES($1, $2, $3, $4) RETURNING id;`,
    values: [id, user, nama_tim, ketua_tim ],
  };
  const result = await this._pool.query(query);
  if (!result.rows.length) { throw new InvariantError('User gagal ditambahkan');}
  return id;
};
async getTim(user){
  const query = {
    text: `SELECT id , nama_tim, ketua_tim FROM tim_pengeringan WHERE owner_user = $1;`,
    values: [user],
  };
  const result = await this._pool.query(query);
  if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
  const owner_user = user;
  const jumlah_tim =result.rows.length;
  const tim = result.rows;
  return {owner_user, jumlah_tim, tim};
};
async updateTim( user , id , {nama_tim, ketua_tim  }) {  
  await this.checkTimUpdate(user, id, nama_tim);
  const query ={
    text :`UPDATE tim_pengeringan SET nama_tim = $1,  ketua_tim= $2  WHERE id = $3 RETURNING id`,
    values:[nama_tim, ketua_tim, id,],
  };
  const result = await this._pool.query(query);
  if(!result.rows.length){  throw new InvariantError('lahan gagal Ditambahkan'); }
  return id;
};
async deleteTim(id){
  const query = {
    text: `DELETE FROM tim_pengeringan WHERE id = $1 RETURNING id;`,
    values: [id],
  };
  const result = await this._pool.query(query);
  if (!result) {  throw new InvariantError('tim pengeringan gagal Dihapus');}
  return;
} 



//SERVICE CRUD anggota tim pengeringan



async checkAnggotaTim (job , tim_id, anggota_id) {
  
};

async addAnggotaTim (tim_id, anggota_id) {
  await this.chekStatusKerjaBuruh("pengeringan", tim_id, anggota_id);
  await this.checkAnggotaTim(tim_id, anggota_id);
  const id = `lahan-${nanoid(7)}`;
  const query = {
    text: ` INSERT INTO tim_pengeringan VALUES($1, $2, $3, $4) RETURNING id;`,
    values: [id, user, nama_tim, ketua_tim ],
  };
  const result = await this._pool.query(query);
  if (!result.rows.length) { throw new InvariantError('User gagal ditambahkan');}
  return id;

};
async getAnggotaTim (id) {
  const queryTim = {
    text: `SELECT id , nama_tim, ketua_tim FROM tim_pengeringan WHERE id = $1;`,
    values: [id],
  };
  const Tim = await this._pool.query(queryTim);
  if (!Tim) { throw new InvariantError('gagal mendapatkan tim'); }
  if (!Tim.rows.length) { throw new NotFoundError('gagal mendapatkan lahan'); }

  const query = {
    text: `SELECT anggota_tim FROM anggota_tim WHERE tim_id = $1;`,
    values: [id],
  };
  const result = await this._pool.query(query);
  if (!result) { throw new InvariantError('gagal mendapatkan anggota tim'); }
  const tim_id = Tim.rows[0].id;
  const nama_tim = Tim.rows[0].nama_tim;
  const ketua_tim = Tim.rows[0].ketua_tim;
  const jumlah_anggota =result.rows.length;
  const anggota_tim = result.rows;
  return {tim_id, nama_tim, ketua_tim, jumlah_anggota, anggota_tim};
};
async deleteAnggotaTim (tim_id, anggota_id) {
  const query = {
    text: `DELETE FROM anggota_tim_pengeringan WHERE tim_id= $1 AND anggota_id= $2 RETURNING id;`,
    values: [tim_id, anggota_id],
  };
  const result = await this._pool.query(query);
  if (!result) {  throw new InvariantError('tim pengeringan gagal Dihapus');}
  return;  
};

  ////SERVICE CRUD BAHAN pengeringan
  async addBahan(user, {berat_kg, volume_liter, waktu_mulai_pengeringan, catatan}) {
    const id = `bahan-${nanoid(7)}`;
    const query = {
      text: ` INSERT INTO bahan_pengeringan VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
      values: [id, user, berat_kg, volume_liter, waktu_mulai_pengeringan, catatan],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) { throw new InvariantError('Bahan pengeringan gagal ditambahkan');}
    return id;
  };
  async getBahan(user){
    const query = {
      text: `SELECT id, berat_kg, volume_liter, waktu_mulai_pengeringan, catatan FROM bahan_pengeringan WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
    const owner_user = user;
    const jumlah_bahan =result.rows.length;
    const bahan = result.rows;
    return {owner_user, jumlah_bahan, bahan};
  };
  async updateBahan(id , {berat_kg, volume_liter, waktu_mulai_pengeringan, catatan}) {
    const query ={
      text :`UPDATE bahan_pengeringan SET berat_kg = $1, volume_liter= $2, waktu_mulai_pengeringan= $3, catatan= $4 WHERE id = $5 RETURNING id`,
      values:[berat_kg, volume_liter, waktu_mulai_pengeringan, catatan, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){  throw new InvariantError('bahan pengeringan gagal Ditambahkan'); }
    return id;
  };
  async deleteBahan(id){
    const query = {
      text: `DELETE FROM bahan_pengeringan WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result) {  throw new InvariantError('bahan pengeringan gagal Dihapus');}
    return;
  } 

////SERVICE CRUD hasil pengeringan
  async addHasil(user, {tim_pengeringan, berat_kg, volume_liter, dikeringkan_hari, catatan, upah}) {
    const id = `hasil-${nanoid(7)}`;
    const query = {
      text: ` INSERT INTO hasil_pengeringan VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;`,
      values: [id, user, tim_pengeringan, berat_kg, volume_liter, dikeringkan_hari, catatan, upah, 0],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) { throw new InvariantError('Hasil pengeringan gagal ditambahkan');}
    return id;
  };
  async getHasil(user){
    const query = {
      text: `SELECT id, tim_pengeringan, berat_kg, volume_liter, dikeringkan_hari, catatan, upah, status_pembayaran FROM hasil_pengeringan WHERE owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('gagal mendapatkan hasil pengeringan'); }
    const owner_user = user;
    const jumlah_hasil =result.rows.length;
    const hasil = result.rows;
    return {owner_user, jumlah_hasil, hasil};
  };
  async updateHasil(id , {tim_pengeringan, berat_kg, volume_liter, dikeringkan_hari, catatan, upah}) {
    const query ={
      text :`UPDATE hasil_pengeringan SET tim_pengeringan=$1, berat_kg = $2, volume_liter= $3, dikeringkan_hari= $4, catatan= $5, upah=$6 WHERE id = $7 RETURNING id`,
      values:[tim_pengeringan, berat_kg, volume_liter, dikeringkan_hari, catatan, upah, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){  throw new InvariantError('hasil pengeringan gagal Ditambahkan'); }
    return id;
  };
  async deleteHasil(id){
    const query = {
      text: `DELETE FROM hasil_pengeringan WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result) {  throw new InvariantError('hasil pengeringan gagal Dihapus');}
    return;
  }
  async addLinkPengeringan(id_bahan, id_hasil) {
    const query = {
      text: `INSERT INTO link_pengeringan VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING 'OK BERHASIL';`,
      values: [id_bahan, id_hasil],
    };
    const result = await this._pool.query(query);
    if (!result) {  throw new InvariantError('bahan di set pada hasil');}
    return; 
  }
  async deleteLinkPengeringan(id_bahan, id_hasil) {
    const query = {
      text: `DELETE FROM link_pengeringan WHERE id_bahan= $1 AND id_hasil= $2 RETURNING id;`,
      values: [id_bahan, id_hasil],
    };
    const result = await this._pool.query(query);
    if (!result) {  throw new InvariantError('bahan di unset pada hasil');}
    return; 
  }
}
  
  
  module.exports = pengeringanService;