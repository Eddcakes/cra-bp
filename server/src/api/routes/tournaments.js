import express from 'express';
import { poolPromise } from '../../db.js';

const router = express.Router();

const alltournaments = `
SELECT * FROM ${process.env.DATABASE}.tournaments`;

router.get('/', async (req, res) => {
  let pool;
  try {
    pool = await poolPromise;
    const data = await pool.query(alltournaments);
    return res.json(data);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

export { router as tournaments };
