import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ListAllCaregoryController } from "./ListAllCategoryController";
import { ListAllCaregoryUseCase } from "./ListAllCategoryUseCase";

export default () => {
  const categoriesRepository = new CategoriesRepository();

  const listAllCategoryUseCase = new ListAllCaregoryUseCase(
    categoriesRepository
  );

  const listAllCaregoryController = new ListAllCaregoryController(
    listAllCategoryUseCase
  );

  return listAllCaregoryController;
};
