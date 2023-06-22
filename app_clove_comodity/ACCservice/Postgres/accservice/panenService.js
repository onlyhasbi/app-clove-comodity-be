const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr');
const NotFoundError = require('../../../exception/notFoundErr'); 


class panenService {
    constructor() {
      this._pool = new Pool();
    }

//SERVICE LAHAN    
    async checkLahan(user, nama) {
      const result = await this._pool.query(`SELECT id FROM lahan WHERE owner_user = '${user}' AND nama = '${nama}';`);
      if (result.rows.length === 0) {  return ;}
      throw new InvariantError('nama lahan sudah anda gunakan untuk lahan lain, gunakan nama baru untuk menambahkan atau edit lahan yang sudah ada');
    };
    async checkLahanUpdate(user, id, nama) {
      const result = await this._pool.query(`SELECT id FROM lahan WHERE owner_user = '${user}' AND nama = '${nama}';`);
      if (result.rows.length === 0 || result.rows[0].id === id ) {return ;}
      throw new NotFoundError('nama lahan sudah digunakan untuk lahan lain'); 
    };
////SERVICE CRUD LAHAN
    async addLahan(user, {nama,  lokasi , luas_m2, status_hak_panen }) {
      await this.checkLahan(user, nama);
      const id = `lahan-${nanoid(7)}`;
      const query = {
        text: ` INSERT INTO lahan VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
        values: [id, user, nama,  lokasi , luas_m2, status_hak_panen ],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) { throw new InvariantError('User gagal ditambahkan');}
      return id;
    };
    async getLahan(user){
      const query = {
        text: `SELECT id , nama,  lokasi , luas_m2, status_hak_panen FROM lahan WHERE owner_user = $1;`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const jumlah_lahan =result.rows.length;
      const lahan = result.rows;
      return {owner_user, jumlah_lahan, lahan};
    };
    async updateLahan( user , id , {nama,  lokasi , luas_m2, status_hak_panen }) {  
      await this.checkLahanUpdate(user, id, nama);
      const query ={
        text :`UPDATE lahan SET nama = $1, lokasi= $2, luas_m2= $3, status_hak_panen= $4 WHERE id = $5 RETURNING id`,
        values:[nama,  lokasi , luas_m2, status_hak_panen, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){  throw new InvariantError('lahan gagal Ditambahkan'); }
      return id;
    };
    async deleteLahan(id){
      const query = {
        text: `DELETE FROM lahan WHERE id = $1 RETURNING id;`,
        values: [id],
      };
      const result = await this._pool.query(query);
      if (!result) {  throw new InvariantError('lahan gagal Dihapus');}
      return;
    } 

  

  



//SERVICE SETORAN    
    async checkSetoran(user, nama) {
      const result = await this._pool.query(`SELECT id FROM lahan WHERE owner_user = '${user}' AND nama = '${nama}';`);
      if (result.rows.length === 0) {  return ;}
      throw new InvariantError('nama lahan sudah anda gunakan untuk lahan lain, gunakan nama baru untuk menambahkan atau edit lahan yang sudah ada');
    };
    async checkSetoranUpdate(user, id, nama) {
      const result = await this._pool.query(`SELECT id FROM lahan WHERE owner_user = '${user}' AND nama = '${nama}';`);
      if (result.rows.length === 0 || result.rows[0].id === id ) {return ;}
      throw new NotFoundError('nama lahan sudah digunakan untuk lahan lain'); 
    };
////SERVICE CRUD SETORAN
    async addSetoran(user, {nama,  lokasi , luas_m2, status_hak_panen }) {
      await this.checkLahan(user, nama);
      const id = `lahan-${nanoid(7)}`;
      const query = {
        text: ` INSERT INTO lahan VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
        values: [id, user, nama,  lokasi , luas_m2, status_hak_panen ],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) { throw new InvariantError('User gagal ditambahkan');}
      return id;
    };
    async getSetoran(user){
      const query = {
        text: `SELECT id , nama,  lokasi , luas_m2, status_hak_panen FROM lahan WHERE owner_user = $1;`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const jumlah_lahan =result.rows.length;
      const lahan = result.rows;
      return {owner_user, jumlah_lahan, lahan};
    };
    async updateSetoran( user , id , {nama,  lokasi , luas_m2, status_hak_panen }) {  
      await this.checkLahanUpdate(user, id, nama);
      const query ={
        text :`UPDATE lahan SET nama = $1, lokasi= $2, luas_m2= $3, status_hak_panen= $4 WHERE id = $5 RETURNING id`,
        values:[nama,  lokasi , luas_m2, status_hak_panen, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){  throw new InvariantError('lahan gagal Ditambahkan'); }
      return id;
    };
    async deleteSetoran(id){
      const query = {
        text: `DELETE FROM lahan WHERE id = $1 RETURNING id;`,
        values: [id],
      };
      const result = await this._pool.query(query);
      if (!result) {  throw new InvariantError('lahan gagal Dihapus');}
      return;
    } 
}

  module.exports = panenService;