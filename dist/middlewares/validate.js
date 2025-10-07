"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
/**
 * Middleware para validação usando Zod
 * @param schema - o schema Zod que será usado para validar o body da requisição
 */
const validate = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // valida o body
            next(); // segue para o controller
        }
        catch (err) {
            return res.status(400).json({ error: err.errors ? err.errors : err.message });
        }
    };
};
exports.validate = validate;
