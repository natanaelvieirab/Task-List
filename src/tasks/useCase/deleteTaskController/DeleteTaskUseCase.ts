import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ITasksRepository } from "../../repositories/ITasksRepository";


@injectable()
class DeleteTaskUseCase {

    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITasksRepository
    ) { }

    async execute(id: string): Promise<void> {
        const taskAlreadyExists = await this.tasksRepository.findById(id);

        if (!taskAlreadyExists) {
            throw new AppError("Task already not exists!");
        }

        await this.tasksRepository.deleteTask(id);
    }
}

export { DeleteTaskUseCase };