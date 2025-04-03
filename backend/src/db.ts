import { Pool } from 'pg';

export const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'restaurant_app',
  password: 'your_password',
  port: 5432,
});