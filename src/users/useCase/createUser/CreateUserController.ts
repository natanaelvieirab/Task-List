import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body;

        const user = this.createUserUseCase.execute({
            name,
            email,
            password
        });

        return response.status(201).json(user);
    }
}

export { CreateUserController };