// src/swagger.ts
import swaggerJsdoc from "swagger-jsdoc";

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Yu-Gi-Oh! Duel API",
      version: "1.0.0",
      description:
        "API temática de Yu-Gi-Oh! (Express + TypeScript + Prisma + PostgreSQL + Zod). " +
        "Resources: users, games (duels), moves (plays/cards).",
    },
    servers: [
      { url: "http://localhost:3000", description: "Local" },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "number", example: 1 },
            name: { type: "string", example: "Yugi Muto" },
            email: { type: "string", example: "yugi@duel.ac" },
            password: { type: "string", example: "kuriboh123" }
          },
          required: ["name", "email", "password"]
        },
        Game: {
          type: "object",
          properties: {
            id: { type: "number", example: 1 },
            title: { type: "string", example: "Battle City Duel" },
            userId: { type: "number", example: 1 }
          },
          required: ["title", "userId"]
        },
        Move: {
          type: "object",
          properties: {
            id: { type: "number", example: 1 },
            move: { type: "string", example: "Summon Dark Magician" },
            gameId: { type: "number", example: 1 }
          },
          required: ["move", "gameId"]
        }
      }
    }
  },
  apis: ["./src/routes/*.ts"],
});

export default swaggerSpec;
