import { AppError } from "../../../utils/AppError"
import { IUserDTO } from "../../dtos/IUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute({ name, email, password }: IUserDTO) {
        const user = this.userRepository.findByEmail(email);

        if (user) {
            throw new AppError("User already exists!");
        }

        this.userRepository.createUser({
            name,
            email,
            password
        });
    }
}

export { CreateUserUseCase };