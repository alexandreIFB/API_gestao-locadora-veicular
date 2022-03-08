import { Router } from "express";
import multer from "multer";

import { UpdateUserAvatarController } from "../modules/account/useCases/updateUserAvatar/UpdateUserAvatarController";
import { CreateUserController } from "../modules/account/useCases/user/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.patch("/avatar", updateUserAvatarController.handle);

export { usersRoutes };
