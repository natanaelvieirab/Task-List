import { Router } from "express";
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
usersRoutes.put("/:id", updateUserController.handle);
usersRoutes.get("/:id", showUserController.handle);
usersRoutes.delete("/:id", deleteUserController.handle);

export { usersRoutes };


