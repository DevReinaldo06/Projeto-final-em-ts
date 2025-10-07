import prisma from "../prismaClient";
import { Request, Response } from "express";

export const createGame = async (req: Request, res: Response) => {
  const { title, userId } = req.body;
  const game = await prisma.game.create({ data: { title, userId } });
  res.status(201).json(game);
};

export const getAllGames = async (req: Request, res: Response) => {
  const games = await prisma.game.findMany();
  res.json(games);
};

export const getGameById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const game = await prisma.game.findUnique({ where: { id } });
  res.json(game);
};

export const updateGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title } = req.body;
  const game = await prisma.game.update({ where: { id }, data: { title } });
  res.json(game);
};

export const deleteGame = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.game.delete({ where: { id } });
  res.status(204).send();
};
