import { Router } from "express";
import { CreateTaskController } from "../tasks/useCase/createTask/CreateTaskController";
import { DeleteTaskController } from "../tasks/useCase/deleteTaskController/DeleteTaskController";
import { ShowAllTasksController } from "../tasks/useCase/showAllTasks/ShowAllTasksController"
import { ShowOneTaskController } from "../tasks/useCase/showOneTask/ShowOneTaskController";
import { UpdateDoneController } from "../tasks/useCase/updateDone/UpdateDoneController";
import { UpdateTaskController } from "../tasks/useCase/updateTask/UpdateTaskController";

const tasksRouter = Router();

const createTasksController = new CreateTaskController();
const showAllTasksController = new ShowAllTasksController();
const showOneTaskController = new ShowOneTaskController();
const updateTaskController = new UpdateTaskController();
const updateDoneController = new UpdateDoneController();
const deleteTaskController = new DeleteTaskController();


tasksRouter.post("/", createTasksController.handle);
tasksRouter.get("/", showAllTasksController.handle)
tasksRouter.get("/:id", showOneTaskController.handle)
tasksRouter.put("/:id", updateTaskController.handle)
tasksRouter.patch("/:id/done", updateDoneController.handle);
tasksRouter.delete("/:id", deleteTaskController.handle);


export { tasksRouter };