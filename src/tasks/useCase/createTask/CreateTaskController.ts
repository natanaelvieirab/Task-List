import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";



class CreateTaskController {

    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, description, id_user } = request.body;

        const task = this.createTaskUseCase.execute({
            title,
            description,
            id_user
        });

        return response.status(201).json(task);
    }
}

export { CreateTaskController };