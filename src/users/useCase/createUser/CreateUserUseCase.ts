import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) { }

    async execute({ name, email, password }: IUserDTO): Promise<User> {
        const userAlreadyExistis = await this.userRepository.findByEmail(email);

        if (userAlreadyExistis) {
            throw new AppError("User already exists!");
        }

        const user = await this.userRepository.createUser({
            name,
            email,
            password
        });

        return user;
    }
}

export { CreateUserUseCase };