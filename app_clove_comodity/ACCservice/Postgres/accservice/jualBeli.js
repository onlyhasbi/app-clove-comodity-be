const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../../exception/invariantErr'); 


class jualBeliService {
    constructor() {
      this._pool = new Pool();
    }
  
    async addBahanPengeringan({payload}) {
    };
  
    
  }
  
  
  module.exports = jualBeliService;