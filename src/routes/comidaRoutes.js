import { Router } from "express";
import * as comidaController from '../controllers/comidaController.js'

const router = Router();

router.get("/", comidaController.listarTodas)
router.get("/:id", comidaController.listarUm)
router.post("/", comidaController.create)
router.delete("/:id", comidaController.deletar)
router.put("/:id", comidaController.atualizar)

export default router;