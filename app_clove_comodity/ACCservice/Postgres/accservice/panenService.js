const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const moment = require('moment');
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
    async checkLahanUpdate(id, user, nama) {
      const result = await this._pool.query(`SELECT id FROM lahan WHERE owner_user = '${user}' AND nama = '${nama}';`);
      if (result.rows.length === 0 || result.rows[0].id === id) {return ;}
      throw new NotFoundError('data lahan dengan nilai yang sama sudah ada'); 
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
      await this.checkLahanUpdate(id, user, nama,  lokasi , luas_m2, status_hak_panen);
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


    async chekLahanHasilPanen(id_hasil_panen) {
      const result = await this._pool.query(`SELECT id_lahan FROM hasil_panen WHERE id = '${id_hasil_panen}';`);
      if (result.rows.length === 0) { throw new InvariantError('hasil panen  yang di maksud tidak ada');}
      return result.rows[0].id_lahan;
      }
    async checkHasilPanen(id_lahan, waktu, catatan) {
      const result = await this._pool.query(`SELECT id FROM hasil_panen WHERE id_lahan = '${id_lahan}' AND waktu = '${waktu}' AND catatan = '${catatan}';`);
      if (result.rows.length === 0) {  return ;}
      throw new InvariantError('data hasil panen mungkin sudah di masukkan');
    };

    async checkHasilPanenUpdate(id, id_lahan,  catatan) {
      const result = await this._pool.query(`SELECT id FROM hasil_panen WHERE id_lahan = '${id_lahan}'  AND catatan = '${catatan}';`);
      if (result.rows.length === 0 || result.rows[0].id === id ) {return ;}
      throw new NotFoundError('data hasil panen dengan nilai lahan waktu dan catatan yang sama sudah ada'); 
    };
//SERVICE Hasil Panen      
    async addHasilPanen({id_lahan,  berat_pengukuran_kg , volume_pengukuran_kg, waktu, catatan }) {
      await this.checkHasilPanen(id_lahan, waktu, catatan);
      const id = `H-Panen-${nanoid(7)}`;
      const query = {
        text: ` INSERT INTO hasil_panen VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
        values: [id, id_lahan,  berat_pengukuran_kg , volume_pengukuran_kg, waktu, catatan ],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) { throw new InvariantError('Hasil Panen gagal ditambahkan');}
      return id;
    };
    async getHasilPanen(user) {
      const query = {
        text: `SELECT 
                hasil_panen.id ,
                hasil_panen.id_lahan ,
                lahan.nama as lahan ,
                hasil_panen.berat_pengukuran_kg  as massa,
                hasil_panen.volume_pengukuran_kg as volume,
                hasil_panen.waktu ,
                hasil_panen.catatan 
              FROM 
                hasil_panen INNER JOIN lahan ON lahan.id = hasil_panen.id_lahan 
              WHERE 
                lahan.owner_user = $1;`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const jumlah_hasil_panen =result.rows.length;
      const hasil_panen = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
      return {owner_user, jumlah_hasil_panen, hasil_panen};
    }; 
    async getHasilPanenByLahan(id_lahan) {
      const query = {
        text: `SELECT 
                hasil_panen.id ,
                hasil_panen.id_lahan ,
                lahan.nama as lahan ,
                hasil_panen.berat_pengukuran_kg  as massa,
                hasil_panen.volume_pengukuran_kg as volume,
                hasil_panen.waktu ,
                hasil_panen.catatan 
              FROM  
                hasil_panen INNER JOIN lahan ON hasil_panen.id_lahan = lahan.id 
              WHERE id_lahan = $1;`,
        values: [id_lahan],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const lahan = id_lahan;
      const jumlah_hasil_panen =result.rows.length;
      const hasil_panen = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
      return {lahan, jumlah_hasil_panen, hasil_panen};
    };

    async updateHasilPanen( id ,{id_lahan,  berat_pengukuran_kg , volume_pengukuran_kg, waktu, catatan}){
      await this.checkHasilPanenUpdate(id, id_lahan, catatan);
      const query ={
        text :`UPDATE hasil_panen SET id_lahan= $1,  berat_pengukuran_kg= $2, volume_pengukuran_kg= $3, waktu= $4, catatan= $5 WHERE id = $6 RETURNING id`,
        values:[id_lahan,  berat_pengukuran_kg , volume_pengukuran_kg, waktu, catatan, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){  throw new InvariantError('lahan gagal Ditambahkan'); }
      return id;
    }
    async deleteHasilPanen(id){
      const query = {
        text: `DELETE FROM hasil_panen WHERE id = $1 RETURNING id;`,
        values: [id],
      };
      const result = await this._pool.query(query);
      if (!result) {  throw new InvariantError('hasil_panen gagal Dihapus');}
      return;
    }

//SERVICE SETORAN

    async chekSetoranHasilPanen(id) {
      const result = await this._pool.query(`SELECT id_hasil_panen FROM setoran WHERE id = '${id}';`);
      if (result.rows.length === 0) { throw new InvariantError('setoran  yang di maksud tidak ada');}
      return result.rows[0].id_hasil_panen;
      }
    async chekBuruh(id_buruh) {
      const result = await this._pool.query(`SELECT id FROM owner_user_buruh WHERE id = '${id_buruh}';`);
      if (result.rows.length === 0) { throw new InvariantError('gagal, id buruh tidak ada buruh');}
      return;
    }   
    async checkSetoran(id_hasil_panen, id_buruh) {
      const result = await this._pool.query(`SELECT id FROM setoran WHERE id_hasil_panen = '${id_hasil_panen}' AND id_buruh = '${id_buruh}';`);
      if (result.rows.length === 0) {  return ;}
      throw new InvariantError('data setoran buruh pada hasil panen sudah ada');
    };
    async checkSetoranUpdate( id, id_hasil_panen, id_buruh) {
      const result = await this._pool.query(`SELECT id FROM setoran WHERE id_hasil_panen = '${id_hasil_panen}' AND id_buruh = '${id_buruh}';`);
      if (result.rows.length === 0 || result.rows[0].id === id ) {return ;}
      throw new NotFoundError('nama setoran sudah digunakan untuk lahan lain'); 
    };
////SERVICE CRUD SETORAN
    async addSetoran({id_hasil_panen, id_buruh, volume_liter, berat_kg, upah_rp, waktu, catatan}) {
      await this.checkSetoran(id_hasil_panen, id_buruh,);
      const id = `setoran-${nanoid(7)}`;
      const query = {
        text: ` INSERT INTO setoran VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id;`,
        values: [id, id_hasil_panen, id_buruh, volume_liter, berat_kg, upah_rp, waktu, catatan, 0],
      };
      const result = await this._pool.query(query);
      if (!result.rows.length) { throw new InvariantError('User gagal ditambahkan');}
      return id;
    };
    async getSetoran(user){
      const query = {
        text: `SELECT 
                setoran.id, 
                setoran.id_hasil_panen, 
                setoran.id_buruh,
                lahan.nama as lahan,  
                setoran.volume_liter, 
                setoran.berat_kg, 
                setoran.upah_rp, 
                setoran.waktu as waktu_setoran,
                hasil_panen.waktu as waktu_hasil_panen, 
                setoran.catatan, 
                setoran.status_pembayaran, 
                setoran.hari_pembayaran 
              FROM 
                setoran 
                INNER JOIN (hasil_panen 
                  INNER JOIN lahan ON lahan.id = hasil_panen.id_lahan) 
                ON hasil_panen.id = setoran.id_hasil_panen 
              WHERE lahan.owner_user = $1;`,
        values: [user],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const owner_user = user;
      const jumlah_setoran =result.rows.length;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu_setoran: moment(obj.waktu_setoran).format('YYYY-MM-DD') , waktu_hasil_panen: moment(obj.waktu_hasil_panen).format('YYYY-MM-DD') }));
      return {owner_user, jumlah_setoran, setoran};
    };
    async getSetoranByLahan(id_lahan){
      const query = {
        text: `SELECT 
                setoran.id, 
                setoran.id_hasil_panen, 
                setoran.id_buruh,
                lahan.nama as lahan,  
                setoran.volume_liter, 
                setoran.berat_kg, 
                setoran.upah_rp, 
                setoran.waktu as waktu_setoran,
                hasil_panen.waktu as waktu_hasil_panen, 
                setoran.catatan, 
                setoran.status_pembayaran, 
                setoran.hari_pembayaran 
              FROM 
                setoran 
                  INNER JOIN (hasil_panen 
                    INNER JOIN lahan ON lahan.id = hasil_panen.id_lahan) 
                  ON hasil_panen.id = setoran.id_hasil_panen 
              WHERE hasil_panen.id_lahan = $1;`,
        values: [id_lahan],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const jumlah_setoran =result.rows.length;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu_setoran: moment(obj.waktu_setoran).format('YYYY-MM-DD') , waktu_hasil_panen: moment(obj.waktu_hasil_panen).format('YYYY-MM-DD') }));
      return {id_lahan, jumlah_setoran, setoran};
    };
    async getSetoranByHasilPanen(id_hasil_panen){
      const query = {
        text: `SELECT 
        setoran.id, 
        setoran.id_hasil_panen, 
        setoran.id_buruh,
        lahan.nama as lahan,  
        setoran.volume_liter, 
        setoran.berat_kg, 
        setoran.upah_rp, 
        setoran.waktu as waktu_setoran,
        hasil_panen.waktu as waktu_hasil_panen, 
        setoran.catatan, 
        setoran.status_pembayaran, 
        setoran.hari_pembayaran 
      FROM 
        setoran 
          INNER JOIN (hasil_panen 
            INNER JOIN lahan ON lahan.id = hasil_panen.id_lahan) 
          ON hasil_panen.id = setoran.id_hasil_panen 
      WHERE setoran.id_hasil_panen = $1;`,
        values: [id_hasil_panen],
      };
      const result = await this._pool.query(query);
      if (!result) { throw new InvariantError('gagal mendapatkan lahan'); }
      const jumlah_setoran =result.rows.length;
      const  setoran = result.rows.map(obj => ({ ...obj, waktu_setoran: moment(obj.waktu_setoran).format('YYYY-MM-DD') , waktu_hasil_panen: moment(obj.waktu_hasil_panen).format('YYYY-MM-DD') }));
      return {id_hasil_panen, jumlah_setoran, setoran};
    };
    async updateSetoran( id , {id_hasil_panen, id_buruh, volume_liter, berat_kg, upah_rp, waktu, catatan}) {  
      await this.checkLahanUpdate(id, id_hasil_panen, id_buruh);
      const query ={
        text :`UPDATE setoran SET id_hasil_panen = $1, id_buruh= $2, volume_liter= $3, berat_kg= $4, upah_rp= $5, waktu= $6, catatan= $7  WHERE id = $8 RETURNING id`,
        values:[id_hasil_panen, id_buruh, volume_liter, berat_kg, upah_rp, waktu, catatan, id,],
      };
      const result = await this._pool.query(query);
      if(!result.rows.length){  throw new InvariantError('lahan gagal Ditambahkan'); }
      return id;
    };
    async deleteSetoran(id){
      const query = {
        text: `DELETE FROM setoran WHERE id = $1 RETURNING id;`,
        values: [id],
      };
      const result = await this._pool.query(query);
      if (!result) {  throw new InvariantError('lahan gagal Dihapus');}
      return;
    } 
}

  module.exports = panenService;