import { Router } from "express";
import { AuthenticateUserController } from "../users/useCase/authenticate/AuthenticateUserController";


const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/login", authenticateUserController.handle);

export { authenticateRoutes };