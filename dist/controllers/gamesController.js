"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.getGameById = exports.getAllGames = exports.createGame = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const createGame = async (req, res) => {
    const { title, userId } = req.body;
    const game = await prismaClient_1.default.game.create({ data: { title, userId } });
    res.status(201).json(game);
};
exports.createGame = createGame;
const getAllGames = async (req, res) => {
    const games = await prismaClient_1.default.game.findMany();
    res.json(games);
};
exports.getAllGames = getAllGames;
const getGameById = async (req, res) => {
    const id = Number(req.params.id);
    const game = await prismaClient_1.default.game.findUnique({ where: { id } });
    res.json(game);
};
exports.getGameById = getGameById;
const updateGame = async (req, res) => {
    const id = Number(req.params.id);
    const { title } = req.body;
    const game = await prismaClient_1.default.game.update({ where: { id }, data: { title } });
    res.json(game);
};
exports.updateGame = updateGame;
const deleteGame = async (req, res) => {
    const id = Number(req.params.id);
    await prismaClient_1.default.game.delete({ where: { id } });
    res.status(204).send();
};
exports.deleteGame = deleteGame;
