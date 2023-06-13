const  { UNSET } = require('./funcQuery');
const  config = require('./config');
const { Pool } = require('pg');

const koneksi = new Pool(config);

UNSET(koneksi);

