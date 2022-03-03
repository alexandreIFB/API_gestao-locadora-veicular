import { container, inject, injectable } from "tsyringe";
import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../../repositories/interfaces/ICategoriesRepository";

@injectable()
class ListAllCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.listAll()

    return categories;
  }
}

export { ListAllCategoryUseCase };