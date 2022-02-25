import { Router } from "express";
import multer from "multer";
import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategory/CreateCategoryController";


import importCategoryController from "../modules/cars/useCases/Category/importCategory";
import listAllCaregoryController from "../modules/cars/useCases/Category/listAllCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post("", createCategoryController.handle);

categoriesRoutes.get("", (request, response) => {
  return listAllCaregoryController().hanlde(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController().handle(request, response);
});

export { categoriesRoutes };
