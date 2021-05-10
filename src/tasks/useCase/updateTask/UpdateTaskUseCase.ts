import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class UpdateTaskUseCase {

    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository

    ) { }

    async execute({ id, title, description }: IUpdateTaskDTO): Promise<Task> {
        const taskAlreadyExists = await this.tasksRepository.findById(id);

        if (!taskAlreadyExists) {
            throw new AppError("Task already not exists!");
        }

        if (!title) {
            throw new AppError("Properties 'title' cannot empty!");
        }

        const task = await this.tasksRepository.updateTask({
            id,
            title,
            description
        });

        return task;
    }
}

export { UpdateTaskUseCase };