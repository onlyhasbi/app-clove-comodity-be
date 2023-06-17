const fs = require('fs');
const NotFoundError = require('../../exception/notFoundErr'); 
const InvariantError = require('../../exception/invariantErr'); 
const { error } = require('console');

 
class dummyService {
async dataLokasi(id){
    const data = await fs.readFileSync('app_clove_comodity/ACCservice/dummy/lokasi.json');
    const jsonData = JSON.parse(data);
    const location = jsonData.filter((lokasi) => lokasi.id_lokasi === id )
    if (location.length === 0) { throw new NotFoundError('id_lokasi tidak di temukan') }
    return location;
}


async dataSubLokasi(id) {
  const data = fs.readFileSync('app_clove_comodity/ACCservice/dummy/lokasi.json');
  const jsonData = JSON.parse(data);
  const location = jsonData.filter((lokasi) => lokasi.id_lokasi === id );
  if (location.length === 0) { throw new NotFoundError('id_lokasi tidak di temukan') }
  
  const id_lokasi = location[0].id_lokasi;
  const id_kategori =location[0].id_kategori;
  const kategori_lokasi =location[0].kategori_lokasi;
  const nama_lokasi =location[0].nama_lokasi;
  const long = id_kategori.length;

  const sub_lokasi = jsonData.filter((lokasi) => (lokasi.id_lokasi.slice(0, long)=== id_kategori) & (lokasi.id_lokasi !== id_lokasi) );
  const jumlah_sub_lokasi =sub_lokasi.length;

  return {id_lokasi, id_kategori, kategori_lokasi, nama_lokasi, jumlah_sub_lokasi, sub_lokasi};
}
}



module.exports = dummyService;