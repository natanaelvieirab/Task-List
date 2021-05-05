
import { AppError } from "../../../shared/errors/AppError";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { ITaskDTO } from "../../dtos/ITaskDTO";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";



class CreateTaskUseCase {

    constructor(
        private taskRepository: ITasksRepository,
        private userRepository: IUsersRepository
    ) { }

    async execute({ title, description, id_user }: ITaskDTO): Promise<Task> {

        // const user = this.userRepository.findById(id_user);

        // if (!user) {
        //     throw new AppError("User does not exists!");
        // }

        if (!title) {
            throw new AppError("'Title' properties cannot be empty!");
        }

        const task = this.taskRepository.createTask({ title, description, id_user });

        return task;
    }

}

export { CreateTaskUseCase };