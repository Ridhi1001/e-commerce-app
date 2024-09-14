const { Pool } = require('pg');
const pool = require('../db');

const createCartTable = async () => {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS cart (
      id SERIAL PRIMARY KEY,
      buyer_id INT REFERENCES users(id),
      product_id INT REFERENCES products(id),
      quantity INT DEFAULT 1,
      added_at TIMESTAMP DEFAULT NOW()
    );
  `);
};

module.exports = {
    createCartTable
};
