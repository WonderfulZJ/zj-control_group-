import * as express from 'express';
import { pool } from '../db';

const router = express.Router();

// Get restaurants by name and opening hours
router.get('/', async (req, res) => {
  const { name, dateTime } = req.query;

  try {
    const query = `
      SELECT * FROM restaurants
      WHERE LOWER(name) LIKE LOWER($1)
      AND opening_hours @> $2::jsonb
    `;
    const result = await pool.query(query, [`%${name}%`, JSON.stringify({ dateTime })]);
    res.json(result.rows);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;