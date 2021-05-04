import { Router } from "express";
import { usersRoutes } from "./user.routes";
import { tasksRouter } from "./tasks.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tasks", tasksRouter);

export { router };



