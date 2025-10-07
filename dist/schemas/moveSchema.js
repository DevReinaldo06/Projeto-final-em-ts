"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMoveSchema = void 0;
const zod_1 = require("zod");
exports.createMoveSchema = zod_1.z.object({
    gameId: zod_1.z.number(),
    move: zod_1.z.string().min(1),
});
