import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/errors/AppError";
import Auth from "../../../config/auth";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface ITokenDTO {
    name: string;
    token: string;
}

interface IRequest {
    email: string;
    password: string;
}

@injectable()
class AuthenticateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<ITokenDTO> {

        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password is incorrect!");
        }

        if (password !== user.password) {
            throw new AppError("Email or password is incorrect!");
        }

        const token = sign({}, Auth.SECRET_WORD, {
            subject: user.id,
            expiresIn: Auth.TOKEN_DURATION,
        });

        return {
            name: user.name,
            token
        } as ITokenDTO;
    }
}

export { AuthenticateUserUseCase };