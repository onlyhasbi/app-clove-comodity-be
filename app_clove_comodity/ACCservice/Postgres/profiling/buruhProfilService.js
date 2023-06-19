const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr');  
const NotFoundError = require('../../../exception/notFoundErr');


class profilingService{
    constructor() {
      this._pool = new Pool();
    }

  async addKontak({jenis_kontak, kontak})  {
    const id= `k_buruh-${nanoid(5)}`;
    const query = {
      text: ` INSERT INTO kontak_buruh VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id;`,
      values: [id, jenis_kontak, kontak],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new InvariantError('kontak gagal ditambahkan');
    }
    return id;
  }
  }
  
  
  module.exports =profilingService