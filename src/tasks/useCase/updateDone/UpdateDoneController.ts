import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateDoneUseCase } from "./UpdateDoneUseCase";


class UpdateDoneController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const updateDoneUseCase = container.resolve(UpdateDoneUseCase);

        const task = await updateDoneUseCase.execute(id);

        return response.status(200).json(task);
    }
}

export { UpdateDoneController };