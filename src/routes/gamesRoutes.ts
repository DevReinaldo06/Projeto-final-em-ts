import { Router } from "express";
import * as gamesController from "../controllers/gamesController";
import { validate } from "../middlewares/validate";
import { createGameSchema } from "../schemas/gameSchema";

const router = Router();

/**
 * @swagger
 * /games:
 *   get:
 *     summary: Lista todos os jogos
 *     responses:
 *       200:
 *         description: Lista de jogos
 */
router.get("/", gamesController.getAllGames);

/**
 * @swagger
 * /games/{id}:
 *   get:
 *     summary: Obtém um jogo pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Jogo encontrado
 */
router.get("/:id", gamesController.getGameById);

/**
 * @swagger
 * /games:
 *   post:
 *     summary: Cria um novo jogo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       201:
 *         description: Jogo criado
 */
router.post("/", validate(createGameSchema), gamesController.createGame);

/**
 * @swagger
 * /games/{id}:
 *   put:
 *     summary: Atualiza um jogo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Game'
 *     responses:
 *       200:
 *         description: Jogo atualizado
 */
router.put("/:id", validate(createGameSchema), gamesController.updateGame);

/**
 * @swagger
 * /games/{id}:
 *   delete:
 *     summary: Deleta um jogo
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       204:
 *         description: Jogo deletado
 */
router.delete("/:id", gamesController.deleteGame);

export default router;
