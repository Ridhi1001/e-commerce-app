const pool = require('../db');

const createUserTable = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255),
      role VARCHAR(10) CHECK (role IN ('seller', 'buyer')) NOT NULL
    );
  `);
};

module.exports = {
  createUserTable
};
