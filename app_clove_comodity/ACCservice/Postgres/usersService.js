const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const AuthenticationError = require('../../exception/authErr');
const InvariantError = require('../../exception/invariantErr'); 
const NotFoundError = require('../../exception/notFoundErr'); 
class usersService {
  constructor() {
    this._pool = new Pool();
  }

  async addUserBuruh({nomor_telpon, nama, sandi, tanggal_lahir, jenis_kelamin, alamat}) {
    const id_userForNomorTelpon = await this.checkNomorTelpon('owner_user_buruh', nomor_telpon);
    if ( id_userForNomorTelpon !== "kosong" ){  throw new InvariantError('nomor_telpon sudah terdaftar, anda bisa login sebagi pengguna dengan Nomor telpon dan sandi yang sesuai');}
    const id = `b_user-${nanoid(5)}`;
    const hashedPassword = await bcrypt.hash(sandi, 10);
    const query = {
      text: ` INSERT INTO owner_user_buruh VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;`,
      values: [id, nomor_telpon, nama, hashedPassword, tanggal_lahir, jenis_kelamin, alamat],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async addUserAcc({jenis_pengguna, nomor_telpon, nama, sandi, alamat}) {
    const id_userForNomorTelpon = await this.checkNomorTelpon('owner_user_acc', nomor_telpon);
    if ( id_userForNomorTelpon !== "kosong" ){  throw new InvariantError('nomor_telpon sudah terdaftar, anda bisa login sebagi pengguna dengan Nomor telpon dan sandi yang sesuai');}
    const id = `pxp_user-${nanoid(7)}`;
    const hashedPassword = await bcrypt.hash(sandi, 10);
    
    const query = {
      text: ` INSERT INTOowner_user_acc VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
      values: [id, jenis_pengguna, nomor_telpon, nama, hashedPassword, alamat],
    };
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async getUserBuruh(id){
    const query = {
      text: `SELECT id , nomor_telpon, nama, tanggal_lahir, jenis_kelamin, alamat FROM owner_user_buruh WHERE id = $1;`,
      values: [id],
    };
    const result = await this._pool.query(query);
    console.log(result.rows.length)
    if (!result.rows.length) {
      throw new NotFoundError('user tidak ditemukan');
    }
    return result.rows [0];
  }

  async getUserAcc(id){
    const query = {
      text: `SELECT id , jenis_pengguna, nomor_telpon, nama, alamat FROM owner_user_acc WHERE id = $1;`,
      values: [id],
    };
    const result = await this._pool.query(query);
 console.log(result.rows.length)
    if (!result.rows.length) {
      throw new NotFoundError('user tidak ditemukan');
    }
    return result.rows [0];
  }

  async updateUserBuruh (id, {nama, tanggal_lahir, jenis_kelamin, alamat } ){
    const query = {
      text: `UPDATE owner_user_buruh SET nama = $1, tanggal_lahir = $2, jenis_kelamin = $3, alamat = $4 WHERE id = $5 RETURNING id;`,
      values: [nama, tanggal_lahir, jenis_kelamin, alamat, id],
    };
    const result = await this._pool.query(query);
    console.log(result.rows.length)
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async updateUserAcc(id, {jenis_pengguna, nama,  alamat } ){
    const query = {
      text: `UPDATE owner_user_acc SET jenis_pengguna = $1, nama = $2, alamat = $3 WHERE id = $4 RETURNING id;`,
      values: [jenis_pengguna, nama, alamat, id],
    };
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async deleteUserBuruh(id, permission_id) {
    if (id !== permission_id) {throw new AuthenticationError('izin hapus dibatasi hanya untuk untuk pemngguna yang sesuai');}
    const query = {
      text: `DELETE FROM owner_user_buruh WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new NotFoundError('user tidak ditemukan');
    }
    return result.rows [0];
  }

  async deleteUserAcc(id) {
    const query = {
      text: `DELETE FROM owner_user_acc WHERE id = $1 RETURNING id;`,
      values: [id],
    };
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new NotFoundError('user tidak ditemukan');
    }
    return result.rows [0];
  }


  async checkNomorTelpon(tabel, nomor_telpon) {
    const result = await this._pool.query(`SELECT id FROM ${tabel} WHERE nomor_telpon = '${nomor_telpon}';`);
    if (result.rows.length === 0) {  return "kosong"; }
    return result.rows[0].id;
  }
}


module.exports = usersService;