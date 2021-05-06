import { Router } from "express";
import { CreateTaskController } from "../tasks/useCase/createTask/CreateTaskController";
import { ShowAllTasksController } from "../tasks/useCase/showAllTasks/ShowAllTasksController"

const tasksRouter = Router();

const createTasksController = new CreateTaskController();
const showAllTasksController = new ShowAllTasksController();

tasksRouter.post("/", createTasksController.handle);
tasksRouter.get("/", showAllTasksController.handle)


export { tasksRouter };