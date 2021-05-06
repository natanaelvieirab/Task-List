import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowOneTaskUseCase } from "./ShowOneTaskUseCase";


class ShowOneTaskController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showOneTaskUseCase = container.resolve(ShowOneTaskUseCase);

        const task = await showOneTaskUseCase.execute(id);

        return response.status(200).json(task);
    }
}

export { ShowOneTaskController };