import { AppError } from "../../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Criar categoria", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    const createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );

    const category = {
      name: "SUV",
      description: "SUV test desciption",
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with duplicate", async () => {
    expect(async () => {
      const categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
      const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRepositoryInMemory
      );

      const category = {
        name: "SUV",
        description: "SUV test desciption",
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
