"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUserById = exports.getAllUsers = exports.createUser = void 0;
const prismaClient_1 = __importDefault(require("../prismaClient"));
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await prismaClient_1.default.user.create({ data: { name, email, password } });
    res.status(201).json(user);
};
exports.createUser = createUser;
const getAllUsers = async (req, res) => {
    const users = await prismaClient_1.default.user.findMany();
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUserById = async (req, res) => {
    const id = Number(req.params.id);
    const user = await prismaClient_1.default.user.findUnique({ where: { id } });
    res.json(user);
};
exports.getUserById = getUserById;
const updateUser = async (req, res) => {
    const id = Number(req.params.id);
    const { name, email, password } = req.body;
    const user = await prismaClient_1.default.user.update({
        where: { id },
        data: { name, email, password },
    });
    res.json(user);
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    await prismaClient_1.default.user.delete({ where: { id } });
    res.status(204).send();
};
exports.deleteUser = deleteUser;
