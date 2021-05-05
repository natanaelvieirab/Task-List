import { Router } from "express";
import { CreateTaskController } from "../tasks/useCase/createTask/CreateTaskController";

const tasksRouter = Router();

const createTasksController = new CreateTaskController();

tasksRouter.post("/", createTasksController.handle);

export { tasksRouter };