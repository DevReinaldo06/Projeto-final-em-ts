import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";

import gamesRoutes from "./routes/gamesRoutes";
import usersRoutes from "./routes/usersRoutes";
import moveRoutes from "./routes/moveRoutes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/games", gamesRoutes);
app.use("/users", usersRoutes);
app.use("/moves", moveRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`API rodando! Acesse /api-docs para Swagger`);
});
