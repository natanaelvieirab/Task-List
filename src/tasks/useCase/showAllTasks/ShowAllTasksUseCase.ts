import { inject, injectable } from "tsyringe";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../../repositories/ITasksRepository";

@injectable()
class ShowAllTasksUseCase {

    constructor(
        @inject("TasksRepository")
        private taskRepository: ITasksRepository
    ) { }

    async execute(): Promise<Task[]> {
        const tasks = await this.taskRepository.showAllTasks();
        return tasks;
    }
}

export { ShowAllTasksUseCase }