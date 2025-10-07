import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";

/**
 *
 * @param schema 
 */
export const validate = (schema: ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); 
      next(); 
    } catch (err: any) {
      return res.status(400).json({ error: err.errors ? err.errors : err.message });
    }
  };
};
