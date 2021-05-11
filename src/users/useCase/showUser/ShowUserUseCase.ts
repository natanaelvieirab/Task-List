import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";


@injectable()
class ShowUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id: string): Promise<User> {

        const userAlreadyExists = await this.usersRepository.findById(id);

        if (!userAlreadyExists) {
            throw new AppError("User already not exists!");
        }

        return userAlreadyExists;
    }
}

export { ShowUserUseCase };