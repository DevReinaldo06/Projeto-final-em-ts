"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGameSchema = void 0;
const zod_1 = require("zod");
exports.createGameSchema = zod_1.z.object({
    title: zod_1.z.string().min(1),
    userId: zod_1.z.number(),
});
