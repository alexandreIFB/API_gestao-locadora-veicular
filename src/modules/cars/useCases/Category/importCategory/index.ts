import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

const importCategoryUsecase = new ImportCategoryUsecase();

const importCategoryController = new ImportCategoryController(
  importCategoryUsecase
);

export { importCategoryController };
