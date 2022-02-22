import { response, Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/Category/createCategory";
import { importCategoryController } from "../modules/cars/useCases/Category/importCategory";
import { listAllCaregoryController } from "../modules/cars/useCases/Category/listAllCategory";

const categoriesRoutes = Router();

const upload = multer({ dest: "./tmp" });

categoriesRoutes.post("", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("", (request, response) => {
  return listAllCaregoryController.hanlde(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
