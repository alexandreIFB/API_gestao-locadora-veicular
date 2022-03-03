import { container, injectable } from "tsyringe";
import { Category } from "../../../entities/Category";
import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";

@injectable()
class ListAllCategoryUseCase {


  async execute(): Promise<Category[]> {
    const categoriesRepository = container.resolve(CategoriesRepository)

    const categories = await categoriesRepository.listAll()

    return categories;
  }
}

export { ListAllCategoryUseCase };