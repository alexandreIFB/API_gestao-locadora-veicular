import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgressCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  find(): Category[] {
    throw new Error("Method not implemented.");
  }
}

export { PostgressCategoriesRepository };
