const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const InvariantError = require('../../exception/invariantErr');
const NotFoundError = require('../../exception/notFoundErr');
 
class usersService {
  constructor() {
    this._pool = new Pool();
  }

  async addUserB({nama_pengguna, nama, sandi, tanggal_lahir, jenis_kelamin, alamat}) {
    await this.verifyNewUsername('buruh', nama_pengguna);
    const id = `b_user-${nanoid(5)}`;
    const hashedPassword = await bcrypt.hash(sandi, 10);
    const query = {
      text: ` INSERT INTO buruh VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;`,
      values: [id, nama_pengguna, nama, hashedPassword, tanggal_lahir, jenis_kelamin, alamat],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async addUserPxP({jenis_pengguna, nama_pengguna, nama, sandi, alamat}) {
    await this.verifyNewUsername('pxp', nama_pengguna);
    const id = `pxp_user-${nanoid(7)}`;
    const hashedPassword = await bcrypt.hash(sandi, 10);
    
    const query = {
      text: ` INSERT INTO pxp VALUES($1, $2, $3, $4, $5, $6) RETURNING id;`,
      values: [id, jenis_pengguna, nama_pengguna, nama, hashedPassword, alamat],
    };
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
  }

  async verifyNewUsername(tabel, nama) {
    const result = await this._pool.query(`SELECT id FROM ${tabel} WHERE nama_pengguna = '${nama}';`);
    if (result.rows.length > 0) {  throw new InvariantError('nama_pengguna sudah digunakan oleh user lain, gunakan nama lain untuk nama pengguna.'); }
  }
}


module.exports = usersService;