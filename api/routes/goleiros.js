import express from 'express';
import { getGoleiros, addGoleiro, updateGoleiro, deleteGoleiro } from '../controllers/goleiro.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get("/", getGoleiros);

router.post("/", addGoleiro);

router.put("/:id", updateGoleiro);

router.delete("/:id", deleteGoleiro);

export default router;