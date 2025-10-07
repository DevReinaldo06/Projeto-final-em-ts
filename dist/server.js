"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger")); // Import corrigido
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const moveRoutes_1 = __importDefault(require("./routes/moveRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
// Rotas
app.use("/games", gamesRoutes_1.default);
app.use("/users", usersRoutes_1.default);
app.use("/moves", moveRoutes_1.default);
// Swagger
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`API rodando! Acesse /api-docs para Swagger`);
});
