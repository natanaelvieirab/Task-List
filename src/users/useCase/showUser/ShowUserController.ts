import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowUserUseCase } from "./ShowUserUseCase";




class ShowUserController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.user;

        const showUserUseCase = container.resolve(ShowUserUseCase);

        const user = await showUserUseCase.execute(id);

        return response.status(200).json(user);
    }
}

export { ShowUserController };