import express, { Router, Request, Response } from "express";
import { UsersRepository } from "../users/repositories/implementations/UsersRepository";
import { CreateUserController } from "../users/useCase/createUser/CreateUserController";
import { CreateUserUseCase } from "../users/useCase/createUser/CreateUserUseCase";

var usersRoutes = Router();

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };


