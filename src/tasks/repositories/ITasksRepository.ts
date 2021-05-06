import { ITaskDTO } from "../dtos/ITaskDTO";
import { Task } from "../entities/Task";



interface ITasksRepository {
    createTask(data: ITaskDTO): Promise<Task>;
    showAllTasks(): Promise<Task[]>
    findById(id: string): Promise<Task>;
}

export { ITasksRepository };