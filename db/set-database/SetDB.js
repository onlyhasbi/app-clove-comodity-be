const  { SET } = require('./funcQuery');
const  con = require('./config');
const { Pool } = require('pg');

const koneksi= new Pool(con);

SET(koneksi);
