import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class UpdateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ id, name, password }: IUpdateUserDTO): Promise<User> {

        const userAlreadyExists = await this.usersRepository.findById(id);

        if (!userAlreadyExists) {
            throw new AppError("User already not exists!");
        }

        if (!name || !password) {
            throw new AppError("The camps name or password is empty!");
        }

        const user = await this.usersRepository.updateUser({ id, name, password });

        return user;
    }
}

export { UpdateUserUseCase };