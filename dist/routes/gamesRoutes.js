"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController = __importStar(require("../controllers/gamesController"));
const validate_1 = require("../middlewares/validate");
const gameSchema_1 = require("../schemas/gameSchema");
const router = (0, express_1.Router)();
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
router.post("/", (0, validate_1.validate)(gameSchema_1.createGameSchema), gamesController.createGame);
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
router.put("/:id", (0, validate_1.validate)(gameSchema_1.createGameSchema), gamesController.updateGame);
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
exports.default = router;
