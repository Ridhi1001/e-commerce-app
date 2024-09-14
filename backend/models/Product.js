const { Pool } = require('pg');
const pool = require('../db');

const createProductTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      seller_id INT REFERENCES users(id),
      name VARCHAR(255),
      category VARCHAR(50),
      description TEXT,
      price DECIMAL(10, 2),
      discount DECIMAL(5, 2),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

module.exports = {
    createProductTable
};
