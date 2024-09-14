const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DB_URI,
});
console.log('DB CONNECTED SUCCESSFULLY');
module.exports = pool;
