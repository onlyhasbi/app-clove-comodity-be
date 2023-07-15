const fs = require('fs');
const path = require('path');
 
class StorageService {
  constructor(folder) {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
    this._folder = folder;
  }
 
  async writeFile(file, meta, albumId) {
    let x = meta.filename.lastIndexOf(".");
    let n = meta.filename.length;
    let extensi = meta.filename.substring(x, n);
    const filename = 'albumCover-' + albumId + extensi;
    const path = `${this._folder}/${filename}`;
 
    const fileStream = fs.createWriteStream(path);
 
    return new Promise((resolve, reject) => {
      fileStream.on('error', (error) => reject(error));
      file.pipe(fileStream);
      file.on('end', () => resolve(filename));
    });
  }

  async emptyFiles(albumId) {
    const files = await fs.readdirSync(path.resolve("./storage/foto_profil"));
    await  files.forEach((file) => {
      if(path.basename(file, path.extname(file)).substring(11) == albumId){
        fs.unlinkSync( `./storage/foto_profil/${file}`)
      }
    })
    return;
  }
}
 
module.exports = StorageService;