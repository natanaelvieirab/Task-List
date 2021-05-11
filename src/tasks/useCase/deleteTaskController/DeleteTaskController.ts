import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";



class DeleteTaskController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id } = request.params;

        const deleteTaskController = container.resolve(DeleteTaskUseCase);

        await deleteTaskController.execute(id);

        return response.status(204).send();
    }
}

export { DeleteTaskController };