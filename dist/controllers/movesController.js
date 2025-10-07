"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMove = exports.updateMove = exports.getMoveById = exports.getAllMoves = exports.createMove = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const createMove = async (req, res) => {
    const { gameId, move } = req.body;
    const newMove = await prismaClient_1.default.move.create({
        data: { gameId: Number(gameId), move },
    });
    res.status(201).json(newMove);
};
exports.createMove = createMove;
const getAllMoves = async (req, res) => {
    const moves = await prismaClient_1.default.move.findMany();
    res.json(moves);
};
exports.getAllMoves = getAllMoves;
const getMoveById = async (req, res) => {
    const id = Number(req.params.id);
    const move = await prismaClient_1.default.move.findUnique({ where: { id } });
    res.json(move);
};
exports.getMoveById = getMoveById;
const updateMove = async (req, res) => {
    const id = Number(req.params.id);
    const { move } = req.body;
    const updatedMove = await prismaClient_1.default.move.update({
        where: { id },
        data: { move },
    });
    res.json(updatedMove);
};
exports.updateMove = updateMove;
const deleteMove = async (req, res) => {
    const id = Number(req.params.id);
    await prismaClient_1.default.move.delete({ where: { id } });
    res.status(204).send();
};
exports.deleteMove = deleteMove;
