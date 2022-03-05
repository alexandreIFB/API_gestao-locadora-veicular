import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/Category/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/Category/importCategory/ImportCategoryController";
import { ListAllCategoryController } from "../modules/cars/useCases/Category/listAllCategory/ListAllCategoryController";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const listAllCategoryController = new ListAllCategoryController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("", createCategoryController.handle);

categoriesRoutes.get("", listAllCategoryController.hanlde);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
