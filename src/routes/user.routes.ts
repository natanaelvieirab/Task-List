import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../users/useCase/createUser/CreateUserController";
import { DeleteUserController } from "../users/useCase/deleteUser/DeleteUserController";
import { ShowUserController } from "../users/useCase/showUser/ShowUserController";
import { UpdateUserController } from "../users/useCase/updateUser/UpdateUserController";


var usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();
const showUserController = new ShowUserController();
const deleteUserController = new DeleteUserController();


usersRoutes.post("/", createUserController.handle);
usersRoutes.put("/", ensureAuthenticated, updateUserController.handle);
usersRoutes.get("/", ensureAuthenticated, showUserController.handle);
usersRoutes.delete("/", ensureAuthenticated, deleteUserController.handle);

export { usersRoutes };


