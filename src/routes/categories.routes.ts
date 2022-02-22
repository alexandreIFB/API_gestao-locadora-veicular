import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/Category/createCategory";
import { listAllCaregoryController } from "../modules/cars/useCases/Category/listAllCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("", (request, response) => {
  return listAllCaregoryController.hanlde(request, response);
});

export { categoriesRoutes };
