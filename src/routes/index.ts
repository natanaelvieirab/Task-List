import { Router } from "express";
import { usersRoutes } from "./user.routes";
import { tasksRouter } from "./tasks.routes";
import { authenticateRoutes } from "./authenticate.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/tasks", tasksRouter);
router.use(authenticateRoutes);

export { router };



