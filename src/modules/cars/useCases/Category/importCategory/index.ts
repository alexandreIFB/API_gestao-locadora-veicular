import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {
  const categoriesRepository = new CategoriesRepository();

  const importCategoryUsecase = new ImportCategoryUsecase(categoriesRepository);

  const importCategoryController = new ImportCategoryController(
    importCategoryUsecase
  );

  return importCategoryController;
};
