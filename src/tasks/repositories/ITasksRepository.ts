import { ITaskDTO } from "../dtos/ITaskDTO";
import { Task } from "../entities/Task";



interface ITasksRepository {
    createTask(data: ITaskDTO): Promise<Task>;
}

export { ITasksRepository };