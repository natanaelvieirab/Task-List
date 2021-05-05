import { AppError } from "../../../utils/AppError"
import { IUserDTO } from "../../dtos/IUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute({ name, email, password }: IUserDTO): Promise<User> {
        const user = this.userRepository.findByEmail(email);

        if (user) {
            throw new AppError("User already exists!");
        }

        const newUser = this.userRepository.createUser({
            name,
            email,
            password
        });

        return newUser;
    }
}

export { CreateUserUseCase };