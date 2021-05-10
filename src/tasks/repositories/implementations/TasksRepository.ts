import { ITaskDTO } from "../../dtos/ITaskDTO";
import { IUpdateTaskDTO } from "../../dtos/IUpdateTaskDTO";
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

    async showAllTasks(): Promise<Task[]> {
        return this.tasks;
    }

    async findById(id: string): Promise<Task> {
        const task = this.tasks.find(task => task.id === id);
        return task;
    }

    async updateTask({ id, title, description, id_user, created_at }: IUpdateTaskDTO): Promise<Task> {
        const task = this.tasks.find(task => task.id === id);

        const position = this.tasks.indexOf(task);

        Object.assign(task, {
            id,
            title,
            description,
            updated_at: new Date
        });

        this.tasks[position] = task;

        return task;
    }
}

export { TasksRepository };