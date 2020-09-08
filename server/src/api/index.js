import express from 'express';
//const express = require('express');
import { message } from './project.js';
import { games } from './routes/games.js';
import { players } from './routes/players.js';
import { tournaments } from './routes/tournaments.js';
import { venues } from './routes/venues.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: message });
});

router.use('/games', games);
router.use('/players', players);
router.use('/tournaments', tournaments);
router.use('/venues', venues);

export { router as api };
