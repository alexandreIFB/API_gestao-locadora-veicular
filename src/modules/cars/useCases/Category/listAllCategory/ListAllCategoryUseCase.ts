import { Category } from "../../../entities/Category";
import { ICategoriesRepository } from "../../../repositories/interfaces/ICategoriesRepository";

class ListAllCaregoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.find();
    return categories;
  }
}

export { ListAllCaregoryUseCase };
