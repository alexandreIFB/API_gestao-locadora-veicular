import { CategoriesRepository } from "../../../repositories/CategoriesRepository";
import { ListAllCaregoryController } from "./ListAllCategoryController";
import { ListAllCaregoryUseCase } from "./ListAllCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const listAllCategoryUseCase = new ListAllCaregoryUseCase(categoriesRepository);

const listAllCaregoryController = new ListAllCaregoryController(
  listAllCategoryUseCase
);

export { listAllCaregoryController };
