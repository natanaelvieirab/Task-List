import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTaskUseCase } from "./CreateTaskUseCase";



class CreateTaskController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, description, id_user } = request.body;

        const createTaskUseCase = container.resolve(CreateTaskUseCase);

        const task = await createTaskUseCase.execute({
            title,
            description,
            id_user
        });

        return response.status(201).json(task);
    }
}

export { CreateTaskController };