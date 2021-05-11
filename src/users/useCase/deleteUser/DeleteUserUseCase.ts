import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { ITasksRepository } from "../../../tasks/repositories/ITasksRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class DeleteUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,

        @inject("TasksRepository")
        private tasksRepository: ITasksRepository
    ) { }

    async execute(id: string): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findById(id);

        if (!userAlreadyExists) {
            throw new AppError("User already not exists!");
        }

        // deletando todas as tasks que pertencem ao user que vai ser deletado
        await this.tasksRepository.deleteTaskByIdUser(id);

        await this.usersRepository.deleteUser(id);
    }
}
export { DeleteUserUseCase };