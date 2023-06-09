const InvariantError = require('../../exception/invariantErr');
const AuthenticationError = require('../../exception/authErr');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
 
class AuthService {
  constructor() {
    this._pool = new Pool();
  }

  async addRefreshToken(token) {
    await this._pool.query(`INSERT INTO auth VALUES('${token}')`);
  }

  async verifyRefreshToken(token) {
    const result = await this._pool.query(`SELECT token FROM auth WHERE token = '${token}'`);
    if (!result.rows.length) {  throw new InvariantError('Refresh token tidak valid') }
  }

  async deleteRefreshToken(token) {
    await this._pool.query(`DELETE FROM auth WHERE token = '${token}'`);
  }

  async verifyUserCredential(user_tabel , {nomor_telpon, sandi}) {
    const result = await this._pool.query(`SELECT id, sandi FROM ${user_tabel} WHERE nomor_telpon =  '${nomor_telpon}'`);
    if (!result.rows.length) { throw new AuthenticationError('Kredensial yang Anda berikan salah') }

    const { id, sandi: hashedPassword } = result.rows[0];
    const match = await bcrypt.compare(sandi, hashedPassword);
    if (!match) { throw new AuthenticationError('Kredensial yang Anda berikan salah') }
    return id;
  }

}



module.exports = AuthService;