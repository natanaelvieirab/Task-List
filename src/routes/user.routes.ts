import { Router } from "express";
import { CreateUserController } from "../users/useCase/createUser/CreateUserController";


var usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };


