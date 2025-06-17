import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  host: 'db-order',
  user: 'postgres',
  password: 'password',
  database: 'ordersdb',
  port: 5432,
});

export default pool;
