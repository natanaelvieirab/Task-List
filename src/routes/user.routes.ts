import express, { Router, Request, Response } from "express";
import { UserRepository } from "../users/repositories/implementations/UserRepository";
import { CreateUserController } from "../users/useCase/createUser/CreateUserController";
import { CreateUserUseCase } from "../users/useCase/createUser/CreateUserUseCase";

var usersRoutes = Router();

const userRepository = new UserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };


