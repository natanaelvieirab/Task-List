import { ITaskDTO } from "../../dtos/ITaskDTO";
import { Task } from "../../entities/Task";
import { ITasksRepository } from "../ITasksRepository";



class TasksRepository implements ITasksRepository {

    tasks: Task[] = [];

    async createTask({ title, description, id_user }: ITaskDTO): Promise<Task> {
        const task = new Task();

        Object.assign(task, {
            title,
            description,
            id_user,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.tasks.push(task);
        console.log(this.tasks);
        return task;
    }

}

export { TasksRepository };