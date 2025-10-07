import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("E-mail inválido").optional(),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").optional(),
});
