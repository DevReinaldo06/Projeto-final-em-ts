import { Router } from "express";
import * as usersController from "../controllers/ursersController";
import { validate } from "../middlewares/validate";
import { z } from "zod";

const router = Router();

const createUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

router.get("/", usersController.getAllUsers);        
router.get("/:id", usersController.getUserById);      
router.post("/", validate(createUserSchema), usersController.createUser); 
router.put("/:id", validate(createUserSchema), usersController.updateUser); 
router.delete("/:id", usersController.deleteUser);    

export default router;
