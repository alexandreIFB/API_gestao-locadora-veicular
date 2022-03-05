import { Router } from "express";

import { CreateUsersController } from "../modules/users/useCases/user/CreateUsersController";

const usersRouter = Router();

const createUsersController = new CreateUsersController();

usersRouter.post("/", createUsersController.handle);

export { usersRouter };
