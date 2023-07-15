const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const moment = require('moment');
const InvariantError = require('../../../exception/invariantErr');
const NotFoundError = require('../../../exception/notFoundErr'); 


class panenService {
    constructor() {
      this._pool = new Pool();
    }


    async verifyUser(user, id ) {
      const result1 = await this._pool.query(`SELECT id FROM setoran WHERE id='${id}' AND id_buruh='${user}' ;`);
      if (result1.rows[0].owner_user  !== user ){ throw new BadResourceError(`id='${id} bukan data milik anda`)} 
      return ;
    }


    async getPanen(user){
      const query = { 
        text: ``,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan data riwayat panen buruh'); }
      const owner_user = user;
      const  jumlah_pekerjaan_panen = result.rows.map(obj => ({ ...obj, waktu_setoran: moment(obj.waktu_setoran).format('YYYY-MM-DD') , waktu_hasil_panen: moment(obj.waktu_hasil_panen).format('YYYY-MM-DD') }));
      return {owner_user, jumlah_pekerjaan_panen };
    };
    async getSetoran(user){
      const query = { 
        text: `SELECT * FROM setoran WHERE id_buruh = $1`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD')}));
      return {owner_user, setoran};
    };
    async getSetoranByLahan(id_lahan){
      const query = { 
        text: `SELECT * FROM setoran WHERE id_buruh = $1 AND id_lahan = $2`,  // jion hasil panen
        values: [user, id_lahan],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD')}));
      return {owner_user, setoran};
    };
    async getPanenSelesaiHandler(user){
      const query = { 
        text: `SELECT * FROM setoran WHERE id_buruh = $1 id_lahan = $2 AND status pembayaran= $3`,  // jion hasil panen
        values: [user, id_lahan, true],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD')}));
      return {owner_user, setoran};
    };
    async getPanenBelumSelesaiHandler(user){
      const query = { 
        text: `SELECT * FROM setoran WHERE id_buruh = $1 id_lahan = $2 AND status pembayaran= $3`,  // jion hasil panen
        values: [user, id_lahan, true],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD')}));
      return {owner_user, setoran};
    };






    async updateConplaint( id , {kategori_konplaint, deskripsi_konplaint}) { 
      var kategori = result1.rows[0].kategori_konplaint;
      var deskripsi = result1.rows[0].deskripsi_konplaint; 
      const new_conplaint = {id, kategori_konplaint, deskripsi_konplaint };
      const query1 ={
        text :`SELECT kategori_konplaint, deskripsi_konplaint FROM setoran WHERE id = $3;`,
        values:[ id],
      };
      const result1 = await this._pool.query(query1);
      const query ={
        text :`UPDATE setoran SET kategori_konplaint= $1, deskripsi_konplaint= $2 WHERE id = $3 RETURNING id`,
        values:[kategori_konplaint, deskripsi_konplaint, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){  throw new InvariantError('konplaint setoran kosong');}
      kategori = result1.rows[0].kategori_konplaint;
      deskripsi = result1.rows[0].deskripsi_konplaint;
      const past_conplaint= {id, kategori, deskripsi};
      return {new_conplaint, past_conplaint };
    };
    async deleteConplaint( id) {  
      const query1 ={
        text :`SELECT kategori_konplaint, deskripsi_konplaint FROM setoran WHERE id = $3;`,
        values:[ id],
      };
      const result1 = await this._pool.query(query1);
      if(result.rows[0].kategori_konplaint===null & result.rows[0].deskripsi_konplaint===null){  throw new InvariantError('no konplaint');}
      const query ={
        text :`UPDATE setoran SET kategori_konplaint= $1, deskripsi_konplaint= $2 WHERE id = $3 RETURNING id`,
        values:[null, null, id,],
      };
      const result = await this._pool.query(query);
      if(!result){  throw new InvariantError('gagal mengupdate konplaint');}
      const kategori = result1.rows[0].kategori_konplaint;
      const deskripsi = result1.rows[0].deskripsi_konplaint;
      const conplaint_deleted = {id, kategori, deskripsi};
      return {conplaint_deleted};
    };
}

  module.exports = panenService;