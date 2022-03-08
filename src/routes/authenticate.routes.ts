import { Router } from "express";

import { CreateAuthenticateController } from "../modules/account/useCases/authenticate/CreateAuthenticateController";

const authenticateRoutes = Router();

const createAuthenticateController = new CreateAuthenticateController();

authenticateRoutes.post("/session", createAuthenticateController.handle);

export { authenticateRoutes };
