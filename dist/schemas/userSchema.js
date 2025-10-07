"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    email: zod_1.z.string().email("E-mail inválido"),
    password: zod_1.z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});
exports.updateUserSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    email: zod_1.z.string().email("E-mail inválido").optional(),
    password: zod_1.z.string().min(6, "A senha deve ter pelo menos 6 caracteres").optional(),
});
