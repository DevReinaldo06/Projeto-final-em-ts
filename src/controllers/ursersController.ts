import prisma from "../prismaClient";
import { Request, Response } from "express";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({ data: { name, email, password } });
  res.status(201).json(user);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const user = await prisma.user.findUnique({ where: { id } });
  res.json(user);
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email, password } = req.body;
  const user = await prisma.user.update({
    where: { id },
    data: { name, email, password },
  });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await prisma.user.delete({ where: { id } });
  res.status(204).send();
};
