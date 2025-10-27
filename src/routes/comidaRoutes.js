import { Router } from "express";
import * as comidaController from '../controllers/comidaController.js'

const router = Router();

router.get("/", comidaController.listarTodas)
router.get("/:id", comidaController.listarUm)

export default router;