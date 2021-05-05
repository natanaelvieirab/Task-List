import { container } from "tsyringe";
import { TasksRepository } from "../../tasks/repositories/implementations/TasksRepository";
import { ITasksRepository } from "../../tasks/repositories/ITasksRepository";
import { UsersRepository } from "../../users/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../users/repositories/IUsersRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<ITasksRepository>(
    "TasksRepository",
    TasksRepository
);