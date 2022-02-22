import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ListAllCaregoryController } from "./ListAllCategoryController";
import { ListAllCaregoryUseCase } from "./ListAllCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const listAllCategoryUseCase = new ListAllCaregoryUseCase(categoriesRepository);

const listAllCaregoryController = new ListAllCaregoryController(
  listAllCategoryUseCase
);

export { listAllCaregoryController };