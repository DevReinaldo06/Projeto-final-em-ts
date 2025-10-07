import { z } from "zod";

// title: ex. "Battle City Duel"
export const createGameSchema = z.object({
  title: z.string(),
  userId: z.number().int(),
});
export type CreateGameInput = z.infer<typeof createGameSchema>;
