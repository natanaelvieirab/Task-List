import { UserRepository } from "../../repositories/implementations/UserRepository";
import { UserDTO } from "../../dtos/UserDTO";
import { AppError } from "../../../utils/AppError"

class CreateUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute({ name, email, password }: UserDTO) {
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