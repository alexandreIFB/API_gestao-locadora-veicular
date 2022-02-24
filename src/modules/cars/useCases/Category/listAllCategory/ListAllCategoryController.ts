import { Request, Response } from "express";

import { ListAllCaregoryUseCase } from "./ListAllCategoryUseCase";

class ListAllCaregoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllCategoryUseCase: ListAllCaregoryUseCase) { }

  async hanlde(request: Request, response: Response): Promise<Response> {
    const categories = await this.listAllCategoryUseCase.execute();
    return response.json(categories);
  }
}

export { ListAllCaregoryController };
