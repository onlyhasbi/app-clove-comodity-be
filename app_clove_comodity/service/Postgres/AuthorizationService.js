const NotFoundError = require('../../exception/notFoundErr');
const BadResourceError = require('../../exception/badResourchErr');
const { Pool } = require('pg');

class authorizationService {
  constructor() {
    this._pool = new Pool();
  }
  
  async verifyUser(user, table, id ) {
    const result1 = await this._pool.query(`SELECT owner_user FROM ${table} WHERE id='${id}' ;`);
    if (!result1.rows.length){ throw new NotFoundError(`tidak menemukan id = ${id} pada tabel ${table}`)}
    if (result1.rows[0].owner_user  !== user ){ throw new BadResourceError(`id='${id} bukan data milik anda`)} 
    return ;
  }
}
  module.exports = authorizationService;