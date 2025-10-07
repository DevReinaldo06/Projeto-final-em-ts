import { z } from "zod";

// move: ex. "Summon Dark Magician"
export const createMoveSchema = z.object({
  move: z.string(),
  gameId: z.number().int(),
});
export type CreateMoveInput = z.infer<typeof createMoveSchema>;
