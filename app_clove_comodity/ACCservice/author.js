const NotFoundError = require('../../exceptions/notFoundError');
const BadResourceError = require('../../exceptions/badResourceError');
const { Pool } = require('pg');

class authorizationService {
    constructor() {
      this._pool = new Pool();
    }
    

    async verifyUser( idU , idD, Table) {
      const result1 = await this._pool.query(`SELECT id FROM ${Table} WHERE id='${idD}' AND id_pxp='${idU}'`);
      if (!result1.rows.length){ throw new NotFoundError(`tidak ada akses update data ='${idD} pada ${Table} untuk user ${idU}`)}
      return ;
    }
}
  module.exports = authorizationService;