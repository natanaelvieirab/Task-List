import express from "express";
import { router } from "./routes";

var app = express();

app.use(router);

export { app };
