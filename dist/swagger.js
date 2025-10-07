"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/swagger.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Pokémon Memory API",
            version: "1.0.0",
            description: "API de Pokémon Memory Game",
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor local",
            },
        ],
        components: {
            schemas: {
                Game: {
                    type: "object",
                    properties: {
                        id: { type: "number", example: 1 },
                        title: { type: "string", example: "Pokémon Match" },
                    },
                    required: ["title"],
                },
                Move: {
                    type: "object",
                    properties: {
                        id: { type: "number", example: 1 },
                        move: { type: "string", example: "Pikachu" },
                        gameId: { type: "number", example: 1 },
                    },
                    required: ["move", "gameId"],
                },
            },
        },
    },
    apis: ["./src/routes/*.ts"], // aqui ficam as rotas anotadas com JSDoc
});
exports.default = swaggerSpec;
