import express from 'express';
import { createMover, getMovers } from '../controllers/movers-controller.js';

const router = express.Router();

router.post('/create', createMover)
router.get('/get', getMovers)

export default router