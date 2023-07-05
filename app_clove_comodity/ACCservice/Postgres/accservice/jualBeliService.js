const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr');
const NotFoundError = require('../../../exception/notFoundErr'); 


class jualBeliService {
    constructor() {
      this._pool = new Pool();
    }
  
    async addBahanPengeringan({payload}) {
    };
  
    
  }
  
  
  module.exports = jualBeliService;