const InvariantError = require('../../exception/invariantErr');
const AuthenticationError = require('../../exception/authErr');
const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const fs = require('fs');
 
class dummyService {

  async filter(clausa) {
    const data = fs.readFileSync('app_clove_comodity/ACCservice/dummy/lokasi.json');
    const jsonData = JSON.parse(data);
    const long = clausa.length;
    const list = jsonData.filter((lokasi) => (lokasi.id_lokasi.slice(0, long)=== clausa) & (lokasi.id_lokasi.slice(0, (long+3)) !== `${clausa}000`) );
    return list;
}
async check (id){
    console.log('dummy')
    const data = fs.readFileSync('app_clove_comodity/ACCservice/dummy/lokasi.json');
    const jsonData = JSON.parse(data);
    const list = jsonData.filter((lokasi) => lokasi.id_lokasi === id )
    return list;
}

}



module.exports = dummyService;