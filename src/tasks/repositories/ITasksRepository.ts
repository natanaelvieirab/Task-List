import { ITaskDTO } from "../dtos/ITaskDTO";



interface ITasksRepository {
    createTask(data: ITaskDTO): Promise<void>;
}

export { ITasksRepository };