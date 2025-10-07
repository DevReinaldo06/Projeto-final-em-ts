import { Router } from "express";
import * as movesController from "../controllers/movesController";
import { validate } from "../middlewares/validate";
import { z } from "zod";

const router = Router();

const createMoveSchema = z.object({
  gameId: z.string(),
  playerId: z.string(),
  move: z.string(),
});

router.get("/", movesController.getAllMoves);          
router.get("/:id", movesController.getMoveById);       
router.post("/", validate(createMoveSchema), movesController.createMove); 
router.put("/:id", validate(createMoveSchema), movesController.updateMove); 
router.delete("/:id", movesController.deleteMove);     
export default router;
