const InvariantError = require('../../exception/invariantErr');
const AuthenticationError = require('../../exception/authErr');
const { Pool } = require('pg');
 
class AuthenticationsService {
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
    await this._pool.query(`DELETE FROM authentications WHERE token = '${token}'`);
  }

  async verifyUserCredential(username, password) {
    const result = await this._pool.query(`SELECT id, password FROM users WHERE username =  '${username}'`);
    if (!result.rows.length) { throw new AuthenticationError('Kredensial yang Anda berikan salah') }

    const { id, password: hashedPassword } = result.rows[0];
    const match = await bcrypt.compare(password, hashedPassword);
    if (!match) { throw new AuthenticationError('Kredensial yang Anda berikan salah') }
    return id;
  }

}



module.exports = AuthenticationsService;