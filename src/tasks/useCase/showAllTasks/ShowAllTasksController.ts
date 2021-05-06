import { Request, Response } from "express";
import { container } from "tsyringe";
import { ShowAllTasksUseCase } from "./ShowAllTasksUseCase";



class ShowAllTasksController {

    async handle(request: Request, response: Response): Promise<Response> {

        const showAllTasksUseCase = container.resolve(ShowAllTasksUseCase);
        const tasks = await showAllTasksUseCase.execute();

        return response.status(200).json(tasks);
    }
}

export { ShowAllTasksController }