import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCategoryUseCase } from "./ListAllCategoryUseCase";


class ListAllCategoryController {

  async hanlde(request: Request, response: Response): Promise<Response> {
    const listAllCategoryUseCase = container.resolve(ListAllCategoryUseCase)

    const categories = await listAllCategoryUseCase.execute();
    return response.json(categories);
  }
}

export { ListAllCategoryController };
