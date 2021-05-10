import { ITaskDTO } from "../dtos/ITaskDTO";
import { IUpdateTaskDTO } from "../dtos/IUpdateTaskDTO";
import { Task } from "../entities/Task";



interface ITasksRepository {
    createTask(data: ITaskDTO): Promise<Task>;
    showAllTasks(): Promise<Task[]>
    findById(id: string): Promise<Task>;
    updateTask(data: IUpdateTaskDTO): Promise<Task>;
    setDone(id: string, done: boolean): Promise<Task>;
}

export { ITasksRepository };