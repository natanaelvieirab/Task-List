import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class UpdateDoneUseCase {

    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository
    ) { }

    async execute(id: string): Promise<Task> {

        const taskAlreadyExists = await this.tasksRepository.findById(id);

        if (!taskAlreadyExists) {
            throw new AppError("Task already not exists!");
        }

        const task = await this.tasksRepository.setDone(
            id,
            !taskAlreadyExists.done
        );

        return task;
    }
}

export { UpdateDoneUseCase };