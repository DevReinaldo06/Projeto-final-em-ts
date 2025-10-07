import prisma from "../prismaClient";
import { Request, Response } from "express";

export const createMove = async (req: Request, res: Response) => {
  const { gameId, move } = req.body;
  const newMove = await prisma.move.create({
    data: { gameId: Number(gameId), move },
  });
  res.status(201).json(newMove);
};

export const getAllMoves = async (req: Request, res: Response) => {
  const moves = await prisma.move.findMany();
  res.json(moves);
};

export const getMoveById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const move = await prisma.move.findUnique({ where: { id } });
  res.json(move);
};

export const updateMove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { move } = req.body;
  const updatedMove = await prisma.move.update({
    where: { id },
    data: { move },
  });
  res.json(updatedMove);
};

export const deleteMove = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.move.delete({ where: { id } });
  res.status(204).send();
};
