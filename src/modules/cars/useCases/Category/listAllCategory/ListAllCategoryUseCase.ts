import { Category } from "../../../model/Category";
import { ICategoriesRepository } from "../../../repositories/implementations/ICategoriesRepository";

class ListAllCaregoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute(): Category[] {
    return this.categoriesRepository.find();
  }
}

export { ListAllCaregoryUseCase };
