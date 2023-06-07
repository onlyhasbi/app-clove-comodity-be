const fs = require('fs');
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,  
  host: process.env.PGHOST, //?sesuaikan host postgres anda
  database: process.env.PGDATABASE , 
  password: `${process.env.PGPASSWORD}` ,  //?sesuaikan host postgres anda
  port: 5432, //?sesuaikan host postgres anda
});
const query = fs.readFileSync('./db/set-structure/pg/acc_pg_db.sql' , 'utf-8')
async function createTables(query) {
  try {

    console.log('create structure...');
    await pool.query(query);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}


createTables(query);