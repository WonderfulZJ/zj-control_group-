import * as express from 'express';
import { pool } from '../db';

const router = express.Router();

// CRUD for collections
router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query('INSERT INTO collections (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
  } catch (error: any) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM collections');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

router.post('/:id/restaurants', async (req, res) => {
  const { id } = req.params;
  const { restaurantId } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO collection_restaurants (collection_id, restaurant_id) VALUES ($1, $2) RETURNING *',
      [id, restaurantId]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;