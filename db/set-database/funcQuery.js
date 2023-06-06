require('dotenv').config();

const SET = (pool ) => {    
    pool.query(`CREATE DATABASE ${process.env.PGDATABASE}`, (err) => {
        if (err) { console.error(`database ${process.env.PGDATABASE} gagal dibuat`, err) } 
        else {
            console.log(`Database ${process.env.PGDATABASE} berhasil dibuat`);
            pool.query(`CREATE USER ${process.env.PGUSER} WITH ENCRYPTED PASSWORD '${process.env.PGPASSWORD}'`, (err) => {
                if (err) { console.error(`USER ${process.env.PGUSER} gagal dibuat`, err) } 
                else {
                    console.log(`USER ${process.env.PGUSER} berhasil dibuat`);
                    pool.query(`ALTER DATABASE ${process.env.PGDATABASE} OWNER TO ${process.env.PGUSER}`, (err) => {
                        if (err) { console.error(`USER ${process.env.PGUSER} gagal dijadikan OWNER Database ${process.env.PGDATABASE}`, err) }
                        else { console.log(`USER ${process.env.PGUSER} sekarang OWNER Database ${process.env.PGDATABASE}`); pool.end();}
                    })
                }
            })
        }
    })  
}

const UNSET = (pool) => {
    pool.query(`DROP DATABASE ${process.env.PGDATABASE}`, (err) => {
        if (err) { console.error(`database ${process.env.PGDATABASE} gagal DIIHAPUS`, err) }
        else {
            console.log(`Database ${process.env.PGDATABASE} berhasil DIHAPUS`);
            pool.query(`drop USER ${process.env.PGUSER}`, (err) => {
                if (err) { console.error(`USER ${process.env.PGUSER} gagal DIHAPUS`, err) } 
                else { console.log(`USER ${process.env.PGUSER} berhasil DIHAPUS`); pool.end(); }
            })
        }
    })
}  

module.exports = { SET,  UNSET };


