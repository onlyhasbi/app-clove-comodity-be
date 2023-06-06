const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const InvariantError = require('../../exception/invariantErr');
const NotFoundError = require('../../exception/notFoundErr');
 
class usersService {
  constructor() {
    this._pool = new Pool();
  }

  async addUserB({nama, sandi, tanggal_lahir, jenis_kelamin, domisili}) {
    await this.verifyNewUsername(nama);
    const id = `user-${nanoid(16)}`;
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = {
      text: `
      INSERT INTO users VALUES($1, $2, $3, $4, $5, $6);
      INSERT INTO bcrypt VALUES($1, $7);
      RETURNING id; 
      `,
      values: [id, nama, sandi, tanggal_lahir, jenis_kelamin, domisili, hashedPassword],
    };
 
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new InvariantError('User gagal ditambahkan');
    }
    return id;
}


  async verifyNewUsername(nama) {
    const query = {
        text: 'SELECT nama FROM users WHERE username = $1',
        values: [nama],
      };   
      const result = await this._pool.query(query);
   
      if (result.rows.length > 0) {
        throw new InvariantError('Gagal : nama sudah digunakan, gunakan nama yang lain!.');
    }
  }

  async getUserById(userId) {
    const query = {
      text: 'SELECT id, username, fullname FROM users WHERE id = $1',
      values: [userId],
    };
 
    const result = await this._pool.query(query);
 
    if (!result.rows.length) {
      throw new NotFoundError('User tidak ditemukan');
    }
 
    return result.rows[0];
  }
}


module.exports = usersService;