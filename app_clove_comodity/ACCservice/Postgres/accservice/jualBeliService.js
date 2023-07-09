const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const moment = require('moment');
const InvariantError = require('../../../exception/invariantErr');
const NotFoundError = require('../../../exception/notFoundErr'); 


class jualBeliService {
  constructor() {
    this._pool = new Pool();
  }

  async checkTransactionPartnersIsUser(user,id) {
    if (!id || id==="") {return;}
    if(id === user){ throw new InvariantError('tidak valid , user sebagai pembeli sekaligus sebagai penjual tidak benar')}
    const result = await this._pool.query(`SELECT id FROM owner_user_acc WHERE id = '${id}';`);
    if (result.rows.length === 0) {  throw new InvariantError('id tidak valid, tidak ditemukan user dengan id terdaftar');}
    return;
  }

  async verifyTransactionPartnersIsUser(user, table, id ) {
    const result1 = await this._pool.query(`SELECT non_owner_user FROM ${table} WHERE id='${id}' ;`);
    if (!result1.rows.length){ throw new NotFoundError(`tidak menemukan id = ${id} pada tabel ${table}`)}
    if (result1.rows[0].non_owner_user  !== user ){ throw new BadResourceError(`anda bukan mitra transaksi pada data jual beli dengan id='${id} `)} 
    return ;
  }


//SERVICE CUD jual beli
  async addJualBeli(owner_user_as, owner_user, non_owner_user, { jenis_komditas_cengkeh, berat_kg , harga_rp , waktu, catatan }) {
    const id = `JualBeli-${nanoid(7)}`;
    if (non_owner_user==='') { non_owner_user=null}
    const editor = `hanya_owner`;
    const query = {
      text: ` INSERT INTO jual_beli VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;`,
      values: [id, owner_user, non_owner_user, owner_user_as, editor, jenis_komditas_cengkeh, berat_kg , harga_rp , waktu, catatan, 0 ],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('User gagal ditambahkan');}
    return id;
  };

  async getJualBeli(user){
    const query = {
      text: `SELECT * FROM jual_beli WHERE non_owner_user = $1 OR owner_user = $1;`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('data jual beli mendapatkan lahan'); }
    const owner_user = user;
    const jumlah_data =result.rows.length;
    const data = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
    return {owner_user, jumlah_data, data};
  }; 
  async getJualBeliById(id){
    const query = {
      text: `SELECT * FROM jual_beli WHERE id = $1;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('data jual beli mendapatkan lahan'); }
    const data = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
    return data[0];
  }; 
  async updateJualBeli( id , non_owner_user, {jenis_komditas_cengkeh, berat_kg , harga_rp , waktu, catatan}) {  
    if (non_owner_user==='') { non_owner_user=null};
    const query ={
      text :`UPDATE jual_beli SET non_owner_user= $1, jenis_komditas_cengkeh= $2, berat_kg= $3, harga_rp= $4, waktu= $5, catatan=$6 WHERE id = $7 RETURNING id`,
      values:[non_owner_user, jenis_komditas_cengkeh, berat_kg , harga_rp , waktu, catatan, id,],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){  throw new InvariantError('data pembelian  gagal di update'); }
    return id;
  };
  async deleteJualBeli(id){
    const query = {
      text: `DELETE FROM jual_beli WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result) {  throw new InvariantError('data pembelian gagal Dihapus');}
    return;
  }  


  async getPembelian(user){
    const query = {
      text: `SELECT 
              id ,
              non_owner_user as id_penjual,
              jenis_komditas_cengkeh ,
              berat_kg,
              harga_rp,
              waktu,
              catatan,
              verifikasi_non_author
            FROM jual_beli 
            WHERE owner_user = $1 AND owner_user_as='pembeli'
            
            UNION
            SELECT 
              id ,
              owner_user as id_penjual,
              jenis_komditas_cengkeh ,
              berat_kg,
              harga_rp,
              waktu,
              catatan,
            verifikasi_non_author
            FROM jual_beli 
            WHERE non_owner_user = $1 AND owner_user_as='penjual';`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('data jual beli mendapatkan lahan'); }
    const owner_user = user;
    const jumlah_pembelian =result.rows.length;
    const pembelian = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
    return {owner_user, jumlah_pembelian, pembelian};
  };
  async getPenjualan(user){
    const query = {
      text: `SELECT 
              id ,
              non_owner_user as id_pembeli,
              jenis_komditas_cengkeh ,
              berat_kg,
              harga_rp,
              waktu,
              catatan,
              verifikasi_non_author
            FROM jual_beli 
            WHERE owner_user = $1 AND owner_user_as='penjual'
            
            UNION
            SELECT 
              id ,
              owner_user as id_pembeli,
              jenis_komditas_cengkeh ,
              berat_kg,
              harga_rp,
              waktu,
              catatan,
            verifikasi_non_author
            FROM jual_beli 
            WHERE non_owner_user = $1 AND owner_user_as='pembeli';`,
      values: [user],
    };
    const result = await this._pool.query(query);
    if (!result) { throw new InvariantError('data jual beli mendapatkan lahan'); }
    const owner_user = user;
    const jumlah_penjualan =result.rows.length;
    const penjualan = result.rows.map(obj => ({ ...obj, waktu: moment(obj.waktu).format('YYYY-MM-DD') }));
    return {owner_user, jumlah_penjualan, penjualan};
  };



  async setEditor( id ,value) {  
    const query ={
      text :`UPDATE jual_beli SET editor= $1 WHERE id = $2 RETURNING id`,
      values:[value, id],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){  throw new InvariantError('Set tidak berhasil');}
    return id;
  };
  async setVerifikasi(non_owner_user_as, id ,value) {
    const owner_user_as='';
    if (non_owner_user_as='penjual') { owner_user_as = 'pembeli'; }
    if (non_owner_user_as='pembeli') { owner_user_as = 'penjual'; }
    const query ={
      text :`UPDATE jual_beli SET editor= $1 WHERE id = $2 AND owner_user_as = $3 RETURNING id`,
      values:[value, id, owner_user_as],
    };
    const result = await this._pool.query(query);
    if(!result.rows.length){throw new InvariantError('Set tidak berhasil');}
    return id;
  };
}
  
  
  module.exports = jualBeliService;