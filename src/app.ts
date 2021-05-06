import 'express-async-errors';
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { AppError } from "./shared/errors/AppError";


var app = express();

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }

    return response.status(500).json({
        status: 'error',
        message: `Internal server error - ${err.message}`
    });
});

export { app };
