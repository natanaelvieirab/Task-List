import { Router } from "express";
import { CreateTaskController } from "../tasks/useCase/createTask/CreateTaskController";
import { ShowAllTasksController } from "../tasks/useCase/showAllTasks/ShowAllTasksController"
import { ShowOneTaskController } from "../tasks/useCase/showOneTask/ShowOneTaskController";

const tasksRouter = Router();

const createTasksController = new CreateTaskController();
const showAllTasksController = new ShowAllTasksController();
const showOneTaskController = new ShowOneTaskController();

tasksRouter.post("/", createTasksController.handle);
tasksRouter.get("/", showAllTasksController.handle)
tasksRouter.get("/:id", showOneTaskController.handle)


export { tasksRouter };