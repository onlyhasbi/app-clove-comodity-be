const NotFoundError = require('../../exception/notFoundErr');
const BadResourceError = require('../../exception/badResourchErr');
const AuthenticationError = require('../../exception/authErr');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');

class authorizationService {
    constructor() {
      this._pool = new Pool();
    }
    
    async verifyPlaylistUser( idP , idU, forU ) {
      // const result1 = await this._pool.query(`SELECT owner FROM playlists WHERE id='${idP}'`);
      // if (!result1.rows.length){ throw new NotFoundError(`tidak menemukan playlist`)}
      // if (forU.toLowerCase() === 'owner' & result1.rows[0].owner!==idU ){ throw new BadResourceError(`user bukan owner playlist`) }
      // const result2 = await this._pool.query(`SELECT user_id FROM collaborations WHERE playlist_id='${idP}' AND user_id='${idU}'`);
      // if (result1.rows[0].owner!==idU & !result2.rows.length){ throw new BadResourceError(`user tidak sesuai playlist `) }
      // return ;
    }

    async verifyUserCredential(username, password) {
      // const query = {
      //   text: 'SELECT id, password FROM users WHERE username = $1',
      //   values: [username],
      // };
      // const result = await this._pool.query(query);
  
      // if (!result.rows.length) {
      //   throw new AuthenticationError('Kredensial yang Anda berikan salah');
      // }
  
      // const { id, password: hashedPassword } = result.rows[0];
      // const match = await bcrypt.compare(password, hashedPassword);
  
      // if (!match) {
      //   throw new AuthenticationError('Kredensial yang Anda berikan salah');
      // }
      // return id;
    }
}
  module.exports = authorizationService;