import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";
import { validate } from "uuid";

@injectable()
class ShowOneTaskUseCase {

    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository
    ) { }

    async execute(id: string): Promise<Task> {

        if (!validate(id)) {
            throw new AppError("Params 'id' is invalid!");
        }

        const task = await this.tasksRepository.findById(id);

        return task;
    }
}

export { ShowOneTaskUseCase };