import { Router } from "express";
import { CreateTaskController } from "../tasks/useCase/createTask/CreateTaskController";
import { ShowAllTasksController } from "../tasks/useCase/showAllTasks/ShowAllTasksController"
import { ShowOneTaskController } from "../tasks/useCase/showOneTask/ShowOneTaskController";
import { UpdateDoneController } from "../tasks/useCase/updateDone/UpdateDoneController";
import { UpdateTaskController } from "../tasks/useCase/updateTask/UpdateTaskController";

const tasksRouter = Router();

const createTasksController = new CreateTaskController();
const showAllTasksController = new ShowAllTasksController();
const showOneTaskController = new ShowOneTaskController();
const updateTaskUseCase = new UpdateTaskController();
const updateDoneController = new UpdateDoneController();

tasksRouter.post("/", createTasksController.handle);
tasksRouter.get("/", showAllTasksController.handle)
tasksRouter.get("/:id", showOneTaskController.handle)
tasksRouter.put("/:id", updateTaskUseCase.handle)
tasksRouter.patch("/:id/done", updateDoneController.handle);

export { tasksRouter };