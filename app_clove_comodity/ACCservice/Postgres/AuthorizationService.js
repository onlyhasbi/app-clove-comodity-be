const NotFoundError = require('../../exceptions/notFoundError');
const BadResourceError = require('../../exceptions/badResourceError');
const { Pool } = require('pg');

class authorizationService {
  constructor() {
    this._pool = new Pool();
  }
  
  async verifyAuthor(user, table, id ) {
    const query = {
      text: 'SELECT owner FROM $1 WHERE id = $2',
      values: [table, id,],
    }
    const result1 = await this._pool.query(`SELECT id FROM ${table} WHERE author='${author}'`);
    if (!result1.rows.length){ throw new NotFoundError(`tidak menemukan playlist`)}
    if (result1.rows[0].owner  !== user ){ throw new BadResourceError(`user bukan owner playlist`)} 
    return ;
  }
}
  module.exports = authorizationService;