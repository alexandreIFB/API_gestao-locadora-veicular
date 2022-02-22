import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();

const importCategoryUsecase = new ImportCategoryUsecase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
  importCategoryUsecase
);

export { importCategoryController };
