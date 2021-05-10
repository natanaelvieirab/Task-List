import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateTaskUseCase } from "./UpdateTaskUseCase";



class UpdateTaskController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { title, description } = request.body;

        const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

        const task = await updateTaskUseCase.execute({ id, title, description });

        return response.status(201).json(task);
    }

}

export { UpdateTaskController };